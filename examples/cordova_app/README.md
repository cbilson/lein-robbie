# cordova_app

An Android app built with phonegap and clojurescript.

## Usage

```bash
lein deps
lein cljsbuild once
ant debug install
```

## Things to do after the app in generated

* Change the content of `assets/www/index.html` to be like you want.
* Change `AndroidManifest.xml` to have the permissions and features
  cordova_app uses
* Enable the phonegap plugins you want to use in `plugins.xml`
* Write clojurescript code in `src-cljs`

## License

Copyright (C) 2012 FIXME

Distributed under the Eclipse Public License, the same as Clojure.
