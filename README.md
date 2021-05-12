# Departments and Incidence Front end

---

## Description

- Production link
  https://data-gouv-client.herokuapp.com/
- Github link
  https://github.com/AudebertAdrien/data-gouv-client

### Heroku

- Bundle customized :
  `Follow carefully the documentation`
  <https://github.com/mars/create-react-app-buildpack>

- If the javascript bundle location is customized, such as with an ejected created-react-app project, then `the runtime may not be able to locate the bundle to inject runtime variables`.
  To solve this so the runtime can locate the bundle, set the custom bundle path:
  $ heroku config:set JS_RUNTIME_TARGET_BUNDLE = ./dist/\*.js
  In environnement devlopment the static.json file is required to use this buildpack. This file handles all the configuration described.

### Packages

- bootstrap 5
  - @popperjs/core
- React
  - react-dom
  - React router dom
- Webpack
  - webpack-merge
  - webpack-cli
  - webpack-dev-serve
  - html-webpack-plugin
  - mini-css-extract-plugin
  - clean-webpack-plugin
  - favicons
    - favicons-webpack-plugin
  - sass-loader
  - style-loader
  - postcss-loader
    - postcss-preset-env
  - css-loader
  - babel-loader
- Axios
- Babel
  - @babel/core
  - @babel/plugin-transform-runtime
  - @babel/preset-env
  - @babel/preset-react
  - babel-jest
- jest

```
"node-sass": "^5.0.0","
"react-refresh": "^0.9.0",
"react-test-renderer": "^17.0.1",
```
