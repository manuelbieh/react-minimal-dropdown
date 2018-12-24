const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const camelCase = require('uppercamelcase');

module.exports = {
    entry: {
        example: './src/example/example.js',
    },
    mode: 'development',
    stats: {
        children: false,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{ loader: 'babel-loader' }],
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[name]__[local]',
                            },
                        },
                    ],
                }),
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, '..'),
        compress: true,
        port: 9000,
    },
    plugins: [
        new CaseSensitivePathsPlugin(),
        new ExtractTextPlugin({
            filename: '[name].css',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/example/example.html',
        }),
    ],
    output: {
        path: path.resolve(__dirname, '..', 'example'),
        // publicPath: 'example',
        libraryTarget: 'umd',
        library: camelCase(
            require(path.resolve(__dirname, '..', 'package.json')).name,
        ),
        filename: '[name].js',
    },
};
