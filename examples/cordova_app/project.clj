(defproject cordova_app "0.1.0-SNAPSHOT"
  :description "Port of the functionality in the PhoneGap Android sample app to clojurescript"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.3.0"]]
  :plugins [[cljsbuild "0.2.5"]
            [lein-robbie "0.1.0-SNAPSHOT"]]
  :hooks [lein-robbie]
  :cljsbuild {:builds
              [{:source-path "src-cljs"
                :compiler
                {:output-to "assets/www/app.js"
                 :optimizations :simple
                 :pretty-print true}}]})
