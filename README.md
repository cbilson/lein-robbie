# lein-robbie

A leiningen plugin for creating robbie applications - Android apps
built using phonegap and clojurescript.

## Usage

Put `[lein-robbie "0.1.0-SNAPSHOT"]` into the `:plugins` vector of your
`:user` profile, or if you are on Leiningen 1.x do `lein plugin install
lein-robbie 0.1.0-SNAPSHOT`.

Before using Robbie, you need to have the Android SDK installed and
you will probably want to create an AVD (Android Virtual Device, like
a VM image for the emulator) using the `android` tool.

Once you've got all the prerequisites installed, here's the basic workflow:

    $ lein new robbie my-app
    Copying ...
    Generating ...
    
    $ lein cljsbuild once
    ...
    
    $ android &
    # create your AVD if neccesary
    # start the AVD
    
    $ ant debug install
    ...
    
    # verify you can see 'my_app' in the apps screen in the emulator
    # launch your app
    
    # hack, hack, hack
    
    $ lein cljsbuild once && ant debug install
    
    # goto 'launch your app'

## TODO

* I'd like to override `lein install` to compile cljs and do `ant
  debug install`. My understanding is that I can just make a new
  `leiningen/install` function and it will override the default one as
  long
  [as it's newer than the leiningen built-in install task](https://github.com/technomancy/leiningen/issues/415).
* Maybe it would be better to use a hook? (as in, robert)
* Add some subtasks for other android stuff, like release compiles,
  catting/tailing the adb log, so I don't have to remember how to use
  the android tools to do this and so the cljsbuild happens whenever
  it needs to, instead of having a separate step.
* Longer term: make an iOS and possibly other platform version if
  this.

## License

Copyright © 2012 Chris Bilson

Distributed under the Eclipse Public License, the same as Clojure.

The phonegap portions are distributed under the Apache 2.0 license, as
described in `LICENSE.phonegap`.
