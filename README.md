# e-commerce-client

## Heroku Buildpack for create-react-app

The web server may be configured via the static buildpack => static.json
https://github.com/mars/create-react-app-buildpack#user-content-web-server

## React app with Absolute paths using jsconfig.json

The presence of jsconfig.json file in a directory indicates that the directory is the root of a JavaScript Project. The jsconfig.json file specifies the root files and the options for the features provided by the JavaScript language service.

By default the JavaScript language service will analyze and provide IntelliSense for all files in your JavaScript project.
The "exclude" keeps performance

https://code.visualstudio.com/docs/languages/jsconfig
