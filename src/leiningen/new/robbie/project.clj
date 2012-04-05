(defproject {{name}} "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.3.0"]]
  :plugins [[lein-cljsbuild "0.1.3"]]
  :cljsbuild {:builds
              [{:source-path "src-cljs"
                :compiler
                {:output-to "assets/www/{{name}}.js"
                 :optimizations :simple
                 :pretty-print true}}]})
