(defproject lein-robbie "0.1.1-SNAPSHOT"
  :description "automate working with android phonegap and clojurescript"
  :url "http://github.com/cbilson/lein-droidgap/"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :eval-in-leiningen true
  :jar-exclusions [#"\.DS_Store"]
  :deps [[lein-newnew "0.3.4"]
         [cljsbuild "0.2.5"]])
