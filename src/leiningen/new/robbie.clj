(ns leiningen.new.robbie
  (:use [clojure.java.shell :only [sh]]
        [leiningen.new.templates :only [renderer render-text sanitize slurp-resource]]
        [clojure.java.io :as io]))

(defn android-create [{:keys [target name package activity]}]
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

(defn copy-files [{:keys [name] :as data} & paths]
  (doseq [[src-path dest-path] paths]
    (println "copying" src-path)
    (let [content (slurp-resource (io/file "leiningen" "new" "robbie" src-path))
          dest (io/file name dest-path)]
      (.mkdirs (.getParentFile dest))
      (spit dest content))))

(defn copy-binary-files [{:keys [name] :as data} & paths]
  (doseq [[src-path dest-path] paths]
    (println "copying" src-path)
    (let [dest (io/file name dest-path)]
      (.mkdirs (.getParentFile dest))
      (with-open [input (-> (io/file "leiningen" "new" "robbie" src-path) .getPath io/resource io/input-stream)]
        (with-open [output (io/output-stream dest)]
          (copy input output))))))

(defn generate-files
  [{:keys [name] :as data} & items]
  (doseq [item items]
    (let [[relative-path content] item
          path (io/file name relative-path)]
      (println "Generating" relative-path)
      (.mkdirs (.getParentFile path))
      (spit path content))))

(defn robbie
(defn ^:no-project-needed robbie
  "An Android Phonegap ClojureScript project template"
  [name]
  (let [target "android-10"
        sanitized-name (sanitize name)
        package-path (str "src/com/" sanitized-name)
        activity (str (clojure.string/capitalize sanitized-name) "Activity")
        data {:name sanitized-name
              :original-name name
              :target target
              :package (str "com." sanitized-name)
              :activity activity}]
    (android-create data)
    (copy-files data
                ["phonegap-1.4.1.js" "assets/www/phonegap-1.4.1.js"]
                ["master.css" "assets/www/master.css"]
                ["gitignore" ".gitignore"]
                ["phonegap-externs.js" "resources/externs/phonegap-externs.js"])
    (copy-binary-files data
                       ["phonegap-1.4.1.jar" "libs/phonegap-1.4.1.jar"]
                       ["icon.png" "res/drawable/icon.png"])
    (generate-files data
                    ["README.md" (render "README.md" data)]
                    ["project.clj" (render "project.clj" data)]
                    ["AndroidManifest.xml" (render "AndroidManifest.xml" data)]
                    ["res/xml/phonegap.xml" (render "phonegap.xml" data)]
                    ["res/xml/plugins.xml" (render "plugins.xml" data)]
                    ["res/values/strings.xml" (render "strings.xml" data)]
                    ["assets/www/index.html" (render "index.html" data)]
                    [(str package-path "/" activity ".java") (render "Activity.java" data)]
                    [(str "src-cljs/" name "/core.cljs") (render "core.cljs" data)])))
