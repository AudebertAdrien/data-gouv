# Data-Gouv-client

### heroku beau merdier

- Bundle customized :
  https://github.com/mars/create-react-app-buildpack
  $ heroku buildpacks:set mars/create-react-app

- "mars" change automatically web bin/boot

- If the javascript bundle location is customized, such as with an ejected created-react-app project, then the runtime may not be able to locate the bundle to inject runtime variables.

To solve this so the runtime can locate the bundle, set the custom bundle path:
$ heroku config:set JS_RUNTIME_TARGET_BUNDLE = ./dist/\*.js

- The static.json file is required to use this buildpack. This file handles all the configuration described below.
