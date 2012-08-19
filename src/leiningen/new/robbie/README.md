# {{name}}

An Android app built with phonegap and clojurescript.

## Usage

```bash
lein cljsbuild once
android create avd -n robbie_test_image -t android-13
emulator -avd robbie_test_image &
ant debug install
```

## TODO

* Change the content of `assets/www/index.html` to be like you want.
* Change `AndroidManifest.xml` to have the permissions and features
  {{name}} uses
* Enable the phonegap plugins you want to use in `plugins.xml`
* Write clojurescript code in `src-cljs`

## License

Copyright (C) 2012 FIXME

Distributed under the Eclipse Public License, the same as Clojure.
