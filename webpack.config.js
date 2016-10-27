const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'dist/js'),
        filename: 'app.js'
    },
    devServer: {
        hot: true,
        inline: true,
        port: 15001,
        historyApiFallback: true,
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
