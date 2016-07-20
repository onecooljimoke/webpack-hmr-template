Example webpack config using React and HMR
---

Many of the settings here taken from [Using Webpack's Hot Module Replacement with
React][blog-link] tutorial.

[blog-link]: http://matthewlehner.net/react-hot-module-replacement-with-webpack/

To run:

- clone the repo
- run `npm install`
- run `npm start`
- visit http://localhost:8080

The config expects the following file structure:
+ root
  + src
    - index.html
    - index.js // entry file for bundle compilation
    + components
      // nest components however you want in here

Adding components: 

If you don't want to use relative paths for requiring components
use the alias object in the webpack config.  If the alias object
gets too big, make it a separate file and import it in to the config. 

