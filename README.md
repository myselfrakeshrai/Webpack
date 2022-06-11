# Webpack5 – Basic setup (Hot reload, File import, SASS to CSS conversion, Templating HTML)
### https://devwl.pl/webpack-basic-setup-hot-reload-file-import-sass-to-css-conversion/
Webpack is the most popular boodling tool on the market in 2022. That make it a mast have tool for your web application development. It successfully replaces Gulp and Grunt applications. Below I will describe a short set-up guildline which will include:
* Moving file from “src” to “dist” directory
* Converting sass to css
* Using template file for index.html
* Injecting minimized js and css scripts
* Writing component structured JS code
* Setting up .gitignore			

First you need to install node.js, npm and git. After that, you can download the repo from git repository here and run npm i. The repo will contain the fallowing files and code:
![image](https://user-images.githubusercontent.com/36762135/173204144-b8eed9a3-2b6a-4447-a357-f7f76a780ebb.png)
## webpack.config.js
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

// full tutorial : https://www.youtube.com/watch?v=9c3dBhvtt6o
module.exports = {
    mode: 'development', //production
    entry:{
        main: path.resolve(__dirname, 'src/app.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    //tools
    devtool: 'inline-source-map',
    // npm i -D webpack-dev-server
    devServer:{
        static: path.resolve(__dirname, 'dist'),
        port: 5002,
        open: true,
        hot: true,
    },
    //loaders
    module:{
        rules: [
            // npm i -D sass sass-loader css-loader style-loader 
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },
        ],
    },
    //plugins
    plugins: [
        // npm i -D html-webpack-plugin
        new HtmlWebpackPlugin({
            title: 'for sale',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/template.html')
        }),
        // npm i -D copy-webpack-plugin
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets/img'),
                    to: path.resolve(__dirname, 'dist/img'),
                },
            ],
        }),
    ],

}
```
## package.json
```
{
  "name": "domainsale",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack serve --hot --mode development",
    "build": "webpack --mode production"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "copy-webpack-plugin": "^10.2.4",
    "css-loader": "^6.6.0",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^5.5.0",
    "sass": "^1.49.9",
    "sass-loader": "^12.6.0",
    "style-loader": "^3.3.1",
    "webpack": "^5.69.1",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^4.7.4"
  },
  "dependencies": {
    "lodash": "^4.17.21"
  }
}
```
## app.js

```
import _ from 'lodash'; // usefull library
import sass from './assets/sass/styles.sass'; // used in webpack.config.js
import DomainName from './jscomponents/DomainName';
import Price from './jscomponents/Price';
import DomParagraph from './jscomponents/DomParagraph';
import DomImg from './jscomponents/DomImg';

const mySetup = {
  myImagePath: "img/", // dist image folder
}

document.getElementById("domain").append(new DomainName());
document.getElementById("price").append(new Price("$200", "---"));
document.getElementById("kontakt").append(
  new DomParagraph("Hello!"),
  new DomParagraph(" :) "),
);

document.getElementById('logo').append(new DomImg(mySetup.myImagePath + "logo.webp", "logo", "logo"));
```
