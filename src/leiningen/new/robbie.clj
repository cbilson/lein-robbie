(ns leiningen.new.robbie
  (:use [clojure.java.shell :only [sh]]
        [leiningen.new.templates :only [renderer render-text sanitize]]
        [clojure.java.io :as io]))

(defn android-create [{:keys [target name package activity]}]
  (let [{:keys [exit err]}
        (sh "/Users/cbilson/lib/android-sdk-mac_x86/tools/android" "create" "project"
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
    (let [src (io/file "src" "leiningen" "new" "robbie" src-path)
          dest (io/file name dest-path)]
      (.mkdirs (.getParentFile dest))
      (io/copy src dest))))

(defn generate-files
  [{:keys [name] :as data} & items]
  (.mkdir (io/file name))
  (doseq [item items]
    (let [[relative-path content] item
          path (io/file name relative-path)]
      (.mkdirs (.getParentFile path))
      (spit path content))))

(defn robbie
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
                ["phonegap-1.4.1.jar" "libs/phonegap-1.4.1.jar"]
                ["index.html" "assets/www/index.html"]
                ["master.css" "assets/www/master.css"]
                ["icon.png" "res/drawable/icon.png"]
                ["phonegap.xml" "res/xml/phonegap.xml"]
                ["plugins.xml" "res/xml/plugins.xml"])
    (generate-files data
             ["README.md" (render "README.md" data)]
             ["project.clj" (render "project.clj" data)]
             ["AndroidManifest.xml" (render "AndroidManifest.xml" data)]
             [(:activity-path data) (render "Activity.java" data)]
             [(str "src/" name "/core.cljs") (render "core.cljs" data)])))
