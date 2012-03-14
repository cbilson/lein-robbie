(ns {{name}}.core)

(defn ^:export device-info []
  (doseq [property ["platform" "version" "uuid" "name" "width" "height" "colorDepth"]]
    (.innerHTML (.getElementById document property) (get device property))))

(defn ^:export get-location []
  (.. navigator geolocation
      (getCurrentPosition
       (fn [p] (js/alert (str (.. p coords latitude) (.. p coords longitude))))
       (fn [] ))))

(defn ^:export beep []
  (.. navigator notification (beep 2)))

(defn ^:export vibrate []
  (.. navigator notification (vibrate 0)))

(defn ^:export round-number [num]
  (Math/round (* num (Math/pow 10 3)) / (Math/pow 10 3)))

(def acceleration-watch (atom nil))

(defn upddate-acceleration [a]
  (.. document (getElementById "x") (innerHTML (round-number (.x a))))
  (.. document (getElementById "y") (innerHTML (round-number (.y a))))
  (.. document (getElementById "z") (innerHTML (round-number (.z a)))))

(defn ^:export toggle-acceleration []
  (if (not= nil @acceleration-watch)
    (do
      (.. navigator accelerometer (clearWatch @acceleration-watch))
      (update-acceleration {"x" "" "y" "" "z" ""})
      (swap! acceleraiton-watch nil))
    (let [options {"frequency" 1000}]
      (swap! acceleraiton-watch
             (.. navigator accelerometer
                 (watchAcceleration
                  update-acceleration,
                  (fn [ex]
                    (js/alert (str "accel fail (" (.name ex) ": " (.message ex) ")")))
                  options))))))

(defn ^:export defn prevent-behavior [e]
  (.preventDefault e))

(defn ^:export defn dump-pic [data]
  (let [viewport (.. document (getElementById "viewport"))]
    (.log console data)
    (.. viewport style (display ""))
    (.. viewport style (position "absolute"))
    (.. viewport style (top "10px"))
    (.. viewport style (left "10px"))
    (.. document (getElementById "test_img") (src (str "data:image/jpeg;base64," data)))))

(defn ^:export defn fail [msg]
  (js/alert msg))

(defn ^:export  show-pic []
  (.. navigator camera (getPicture dump-pic fail {"quality" 50})))

(defn ^:export  close []
  (let [viewport (.. document (getElementById "viewport"))]
    (.. viewport style (position "relative"))
    (.. viewport style (display "none"))))

(defn ^:export  contacts-success(contacts)
  (js/alert (str (.length contacts) "contactn returned"
                 (if-let [third-contact-name (get (get contacts 2) "name")]
                   (str "Third contact is" (.formatted third-contact-name))
                   ""))))

(defn ^:export  get-contacts []
  (let [opts (ContactFindOptions.)]
    (.filter opts "")
    (.multiple opts true)
    (.. navigator contacts (find ["displayName", "name"] contacts-success fail, opts))))

(defn ^:export  check-network []
  (let [network-state (.. navigator network connection type)
        states {"Connection.UNKNOWN"  "Unknown connection"
                "Connection.ETHERNET" "Ethernet connection"
                "Connection.WIFI"     "WiFi connection"
                "Connection.CELL_2G"  "Cell 2G connection"
                "Connection.CELL_3G"  "Cell 3G connection"
                "Connection.CELL_4G"  "Cell 4G connection"
                "Connection.NONE"     "No network connection"}]
    (js/confirm (str "Connection type:\n" (get states network-state)))))

(def watch-id (atom nil))

(defn ^:export update-heading [h]
  (.. document (getElementById "h") (innerHTML (.magneticHeading h))))

(defn ^:export toggleCompass []
  (if (not= nil @watch-id)
    (do
      (.. navigator compass (clearWatch @watch-id))
      (swap! watch-id nil)
      (update-heading {"magneticHeading" "off"}))
    (do
      (swap! watch-id (.. navigator compass
                          (watchHeading update-heading
                                        (fn [e] js/alert (str "Compass Error:" (.code e)))
                                        {"frequency" 1000}))))))

(defn ^:export init []
  (.. document (addEventListener "deviceready" device-info true)))