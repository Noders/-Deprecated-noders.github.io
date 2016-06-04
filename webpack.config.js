const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');

module.exports = {
    entry: [
        "bootstrap-loader",
        "./js/entry.js"
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: "style!css"
            }, {
                test: /\.scss$/,
                loaders: ['style', 'css', 'postcss', 'sass']
            }, {
                test: /\.html$/,
                loader: "raw-loader"
            }, {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
            // Bootstrap 4
            {
                test: /bootstrap\/dist\/js\/umd\//,
                loader: 'imports?jQuery=jquery'
            }, {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            }

        ]
    },
    devtool: 'eval',
    plugins: [
        new ProvidePlugin({
            jQuery: 'jquery',
            "window.jQuery": 'jquery',
            $: 'jquery',
            jquery: 'jquery',
            "Tether": 'tether',
            "WOW": 'wowjs',
            "window.Tether": "tether"
        }),
        new HtmlWebpackPlugin({
            template: './templates/home.html',
            inject: 'body'
        }),
    ]
};
