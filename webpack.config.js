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