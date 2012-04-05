(ns cordova_app.core
  (:require [clojure.browser.dom :as dom]
            [clojure.browser.event :as event]
            [clojure.browser.repl :as repl]))

;; From [a gist](https://gist.github.com/1658431) by Daniel Gregoire.
(defn clj->js
  "Recursively transforms ClojureScript maps into Javascript objects,
   other ClojureScript colls into JavaScript arrays, and ClojureScript
   keywords into JavaScript strings."
  [x]
  (cond
   (string? x) x
   (keyword? x) (name x)
   (map? x) (.-strobj (reduce (fn [m [k v]]
                                (assoc m (clj->js k) (clj->js v))) {} x))
   (coll? x) (apply array (map clj->js x))
   :else x))

(defn get-value [id]
  (-> (dom/get-element id)
      (dom/get-value)))

(defn set-text [id text]
  (-> (dom/get-element id)
      (dom/set-text text)))

(defn listen [id event f]
  (-> (dom/get-element id)
      (event/listen event f)))

;; Fill out the tables showing basic information about the device
(def device-props ["platform" "version" "uuid" "name" "width" "height" "colorDepth"])

(defn show-device-info []
  (doseq [[id val] (map #(vec [(str % "Cell") (aget js/device %)]) device-props)]
    (set-text id val)))

;; Google Closure doesn't know about cordova's deviceready event
;; so we have to use plain old DOM eventing
(.addEventListener js/document "deviceready" show-device-info)

(defn compass-enabled? []
  (= "on" (get-value "enableCompassCheckbox")))

;; Keep track of the ID of any heading watch we have created
(def heading-watch (atom nil))

(defn compass [] (.. js/navigator -compass))

;; When we don't want to watch the heading anymore, let the device
;; know.
(add-watch heading-watch nil
           (fn [_ _ old new]
             (if (and (not (nil? old)) (nil? new))
               (do
                 (.clearWatch (compass) old)
                 (set-text "headingCell" "Off")))))

(defn watch-heading []
  (let [show-heading (fn [h]
                       (->> (.-magneticHeading h)
                            (set-text "headingCell")))
        error-handler (fn [e]
                        (.log js/console (str "Compass error:" (.-code e)))
                        (set-text "headingCell" (.-code e)))
        options (clj->js {"frequency" 1000})]
    (swap! heading-watch
           #(.watchHeading (compass) show-heading error-handler options))
    (set-text "headingCell" "Waiting...")))

(listen "enableCompassCheckbox" :change
        #(if (compass-enabled?)
           (reset! heading-watch nil)
           (watch-heading)))

;; `10.0.2.2` is the address of the development machine from the
;; emulator. If you are deploying this to a real device, replace this
;; with the address of the maching running the REPL listener.
;;
;; `lein trampoline cljsbuild repl-listen` to start listening for
;; incoming REPL connections on your development machine.
(listen "connectReplButton" :click
        #(do
           (.log js/console "Connecting to REPL...")
           (repl/connect "http://10.0.2.2:9000/repl")))
