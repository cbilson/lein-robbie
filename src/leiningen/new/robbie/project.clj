(defproject {{name}} "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :cljsbuild {:source-path "src-cljs"
              :compiler
              {:output-to "assets/www/{{name}}.js"
               :externs "resources/externs/phonegap-externs.js"
               :optimizations :simple
               :pretty-print true}}
  :dependencies [[org.clojure/clojure "1.3.0"]])