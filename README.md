# Data-Gouv-client

### heroku beau merdier

https://github.com/mars/create-react-app-buildpack
$ heroku buildpacks:set mars/create-react-app

If the javascript bundle location is customized, such as with an ejected created-react-app project, then the runtime may not be able to locate the bundle to inject runtime variables.

To solve this so the runtime can locate the bundle, set the custom bundle path:
$ heroku config:set JS_RUNTIME_TARGET_BUNDLE = ./dist/\*.js
