const path = require('path')

const config = require(path.resolve(__dirname,"package.json")).config
const metadata = {
    license: require(path.resolve(__dirname,"package.json")).license,
    description: require(path.resolve(__dirname,"package.json")).description,
    name: require(path.resolve(__dirname,"package.json")).name,
    author: require(path.resolve(__dirname,"package.json")).author,
    homepage: require(path.resolve(__dirname,"package.json")).homepage,
}

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const RobotstxtPlugin = require("robotstxt-webpack-plugin");
const SitemapPlugin = require('sitemap-webpack-plugin').default
const AppCachePlugin = require('appcache-webpack-plugin');
//const InlineManifestPlugin = require('inline-manifest-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: config.webpack.output,
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [{
            test: /.js$/,
            exclude: /node_modules|bower_compoents/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/env"],
                    plugins: ["@babel/transform-runtime"]
                }
            }
        }, {
            test: /\.html$/,
            loader: 'html',
            exclude: /index\.html$/
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]+\.[0-9]+\.[0-9]+)?$/,
            loader: "file-loader"
        }, { 
            test: /\.woff(2)?(\?v=[0-9]+\.[0-9]+\.[0-9]+)?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        }, {
            test: /.(ttf|woff2|woff|eot|jpg|jpeg|png|svg|wav|mp3|ico)$/,
            use: ['file-loader?name=[name].[ext]'],
        }, {
            test: /(humans|robots).txt$/,
            use: 'file-loader?name=[name].[ext]',
        }, {
            test: /.vue$/,
            exclude: /node_modules|bower_components/,
            use: 'vue-loader',
        }, {
            test: /\.s[ca]ss|css$/,
            use: [
                'vue-style-loader',
                'css-loader', {
                    loader: 'sass-loader',
                    //options: {
                        //implementation: require('sass')//,
                        //fiber: require('fibers')
                    //}
                }]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        //new InlineManifestPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            favicon: 'src/favicon.ico',
            template: 'src/index.html',
            filename: 'index.html',
            //title: config.site.title,
            path: path.resolve(__dirname, 'dist')
        }),
        new SitemapPlugin(metadata.homepage, [
            '/'
        ]),
        new AppCachePlugin({
            cache: ['favicon.ico', config.webpack.output, 'index.html'],
            network: config.appcache.network,  // No network access allowed!
            fallback: config.appcache.fallback,
            settings: config.appcache.settings,
            output: config.appcache.output
        }),
        new WebpackPwaManifest()
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin()
        ]
    }
}
