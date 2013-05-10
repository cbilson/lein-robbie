(ns leiningen.new.robbie
  (:use [clojure.java.shell :only [sh]]
        [leiningen.new.templates :only [renderer sanitize slurp-resource]]
        [clojure.java.io :as io]))

(defn- android-create [{:keys [target name package activity]}]
  (println "Creating android project targeting" target)
  (let [{:keys [exit err]}
        (sh "android" "create" "project"
            "--target" target
            "--name" name
            "--path" name
            "--activity" activity
            "--package" package)]
    (if (not= 0 exit)
      (throw (Exception. (str "Failed to create android project: " err))))))

(def render (renderer "robbie"))

(defn- copy-files [{:keys [name] :as data} paths]
  (doseq [[src-path dest-path] paths]
    (println "copying" src-path)
    (let [content (-> (io/file "leiningen" "new" "robbie" src-path) (.getPath) slurp-resource)
          dest (io/file name (if (nil? dest-path) src-path dest-path))]
      (.mkdirs (.getParentFile dest))
      (spit dest content))))

(defn- copy-binary-files [{:keys [name] :as data} paths]
  (doseq [[src-path dest-path] paths]
    (println "copying" src-path)
    (let [dest (io/file name (if (nil? dest-path) src-path dest-path))]
      (.mkdirs (.getParentFile dest))
      (with-open [input (-> (io/file "leiningen" "new" "robbie" src-path) .getPath io/resource io/input-stream)]
        (with-open [output (io/output-stream dest)]
          (copy input output))))))

(defn- generate-files [{:keys [name] :as data} items]
  (doseq [item items]
    (let [[template dest-path] item
          dest (io/file name (if (nil? dest-path) template dest-path))]
      (println "Generating" template)
      (.mkdirs (.getParentFile dest))
      (spit dest (render template data)))))

(defmulti framework-specific-files (comp keyword :framework))

(defmethod framework-specific-files :none [project-data] {})

(defmethod framework-specific-files :jquery-mobile-1.0 [generic-project-data]
  {:stylesheets [{:href "jquery.mobile-1.0.1.min.css"}]
   :scripts [{:src "jquery-1.7.1.min.js"}
             {:src "jquery.mobile-1.0.1.min.js"}]
   :text-files [["jquery.mobile-1.0.1.min.css" "assets/www/jquery.mobile-1.0.1.min.css"]
                ["jquery-1.7.1.min.js" "assets/www/jquery-1.7.1.min.js"]
                ["jquery.mobile-1.0.1.min.js" "assets/www/jquery.mobile-1.0.1.min.js"]]})

(defmethod framework-specific-files :jquery-mobile-1.1 [generic-project-data]
  {:stylesheets [{:href "jquery.mobile-1.1.0-rc.1.min.css"}]
   :scripts [{:src "jquery-1.7.1.min.js"}
             {:src "jquery.mobile-1.1.0-rc.1.min.js"}]
   :text-files [["jquery.mobile-1.1.0-rc.1.min.css" "assets/www/jquery.mobile-1.1.0-rc.1.min.css"]
                ["jquery-1.7.1.min.js" "assets/www/jquery-1.7.1.min.js"]
                ["jquery.mobile-1.1.0-rc.1.min.js" "assets/www/jquery.mobile-1.1.0-rc.1.min.js"]]})

(defn- concat-in [m k xs]
  (assoc m k (concat xs (k m))))

(defn- merge-in [left-project-data right-project-data]
  (letfn [($concat [lhs k] (concat-in lhs k (k right-project-data)))]
    (reduce $concat left-project-data [:scripts :stylesheets :template-files :text-files :binary-files])))

(defn- generate-project [{:keys [text-files binary-files template-files] :as project-data}]
  (android-create project-data)
  (copy-files project-data text-files)
  (copy-binary-files project-data binary-files)
  (generate-files project-data template-files))

(defn- options->keyword-map [options]
  (let [pairs (partition 2 options)
        keys (map (comp keyword first) pairs)
        vals (map second pairs)]
    (zipmap keys vals)))

(def default-options
  {:target "android-13"
   :framework :none
   :stylesheets [{:href "master.css"}]
   :scripts [{:src "cordova-2.0.0.js"}]
   :text-files [["cordova-2.5.0.js" "assets/www/cordova-2.5.0.js"]
                ["master.css" "assets/www/master.css"]
                ["gitignore" ".gitignore"]]
   :binary-files [["cordova-2.5.0.jar" "libs/cordova-2.5.0.jar"]
                  ["icon.png" "res/drawable/icon.png"]]
   :template-files [["README.md"]
                    ["project.clj"]
                    ["AndroidManifest.xml"]
                    ["cordova.xml" "res/xml/cordova.xml"]
                    ["plugins.xml" "res/xml/plugins.xml"]
                    ["strings.xml" "res/values/strings.xml"]
                    ["index.html" "assets/www/index.html"]]})

(defn ^{:no-project-needed true}
  robbie
  "An Android Phonegap ClojureScript project template

 Give the name for your new project, followed by key-val pairs of the following:
   target     the android version you want to target. [default: android-17]
              Use `android list targets` to see what your options are.
   framework  include a javascript mobile framework [default: none]
              Options include: jquery-mobile-1.0, jquery-mobile-1.1"
  [name & specified-options]
  (let [sanitized-name (sanitize name)
        package-path (str "src/com/" sanitized-name)
        activity (str (clojure.string/capitalize sanitized-name) "Activity")
        project-data (-> default-options
                         (merge (options->keyword-map specified-options))
                         (merge {:name sanitized-name
                                 :original-name name
                                 :package (str "com." sanitized-name)
                                 :activity activity}))]
    (-> project-data
        (merge-in (framework-specific-files project-data))
        (merge-in {:template-files [["Activity.java" (str package-path "/" activity ".java")]
                                    ["core.cljs" (str "src-cljs/" name "/core.cljs")]]})
        (generate-project))))
