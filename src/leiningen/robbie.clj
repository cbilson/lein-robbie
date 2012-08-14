(ns leiningen.robbie
  (:require [clojure.java.shell :only [sh]]
            [robert.hooke :as hooke]
            [leiningen.cljsbuild :as cljs]
            [leiningen.cljsbuild.subproject :as subproject]))

(defn- ant [target & options]
  (let [{:keys [exit err]}
        (apply (partial sh "ant" (name target)) options)]
    (if (not= 0 exit)
      (println "ant task failed: " err))))

(defn- compile-hook [task & args]
  (if (subproject/prepping?)
    (let [[project] args]
      (if (= cljs/exit-success (cljs/cljsbuild project "once"))
        (ant :debug)))))

(hooke/add-hook #'lcompile/compile #'compile-hook)

(defn- install-hook [task & args]
  (ant :install))

(hooke/add-hook #'linstall/install #'install-hook)