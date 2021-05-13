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

- [Bootstrap 5](https://getbootstrap.com/)  
  Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.
  - [@popperjs/core](https://www.npmjs.com/package/@popperjs/core)  
    Popper will automatically put the tooltip in the right place near the button.
- [React](https://reactjs.org/)  
  React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”
  - [react-dom](https://reactjs.org/docs/react-dom.html)  
    ReactDOM is a package that provides DOM specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page.
  - [React router dom](https://reactrouter.com/web/guides/quick-start)  
    React router dom is a declarative routing for React
- [Webpack](https://webpack.js.org/)  
  Modules are reusable chunks of code built from your app’s JavaScript, node_modules, images, and the CSS styles which are packaged to be easily used in your website. Webpack separates the code based on how it is used in your app, and with this modular breakdown of responsibilities, it becomes much easier to manage, debug, verify, and test your code.
  - [webpack-merge](https://www.npmjs.com/package/webpack-merge)  
    Webpack-merge provides a merge function that concatenates arrays and merges objects creating a new object. I use it to set up a webpack according to my environment of development.
  - [webpack-cli](https://www.npmjs.com/package/webpack-cli)  
    webpack CLI provides a flexible set of commands for developers to increase speed when setting up a custom webpack project.
  - [webpack-dev-serve](https://webpack.js.org/configuration/dev-server/)  
    Use webpack with a development server that provides live reloading. This should be used for development only.
  - [html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/)  
    The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. It generates an HTML file.
  - [mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)  
    This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS.
  - [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin)  
    This plugin will remove all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild.
  - [favicons](https://www.npmjs.com/package/favicons)
    - favicons-webpack-plugin
      The default configuration will automatically generate webapp manifest files along with 44 different icon formats as appropriate for iOS devices, Android devices, Windows Phone and various desktop browsers out of your single logo.png.
  - [node-sass](https://www.npmjs.com/package/node-sass)  
    It allows you to natively compile .scss files to css at incredible speed and automatically via a connect middleware.
  - [sass-loader](https://github.com/webpack-contrib/sass-loader)  
    Loads a Sass/SCSS file and compiles it to CSS.
  - [style-loader](https://webpack.js.org/loaders/style-loader/)  
    Inject CSS into the DOM. It's recommended to combine style-loader with the css-loader.
  - [css-loader](https://webpack.js.org/loaders/css-loader/)  
    The css-loader interprets @import and url() like import/require() and will resolve them.
  - [postcss-loader](https://github.com/webpack-contrib/postcss-loader)  
    PostCSS is a software development tool that uses JavaScript-based plugins to automate routine CSS operations.
    - [postcss-preset-env](https://github.com/csstools/postcss-preset-env)  
      PostCSS Preset Env lets you convert modern CSS into something most browsers can understand, determining the polyfills you need based on your targeted browsers or runtime environments.
  - [babel-loader](https://github.com/babel/babel-loader)  
    This package allows transpiling JavaScript files using Babel and webpack.
- [Axios](https://github.com/axios/axios)  
  Axios is a popular, promise-based HTTP client that sports an easy-to-use API and can be used in both the browser and Node. js. Making HTTP requests to fetch or save data is one of the most common tasks a client-side JavaScript application will need to do.
- [Babel](https://babeljs.io/)  
  Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Here are the main things Babel can do for you:
  Transform syntax
  Polyfill features that are missing in your target environment (through a third-party -polyfill such as core-js)
  Source code transformations (codemods)
  - [@babel/core](https://www.npmjs.com/package/@babel/core)
  - [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime)
  - [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)
  - [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react)
