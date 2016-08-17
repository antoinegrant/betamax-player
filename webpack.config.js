var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

module.exports = {
    name: 'client',
    path: '/src',
    entry: path.resolve('./src/demo.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve('./dist'),
        publicPath: '',
        libraryTarget: 'umd'
    },
    target: 'web',
    resolve: {
        extensions: ['', '.js'],
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'es2016', 'react'],
                    plugins: ['transform-class-properties'],
                },
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    devServer: {
        port: 8081,
        contentBase: './demo',
    },
    devtool: 'source-map'
}