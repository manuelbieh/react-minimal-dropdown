const path = require('path');
const config = require('./development');
const camelCase = require('uppercamelcase');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, config, {
    entry: {
        index: './src/Dropdown.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{ loader: 'babel-loader' }],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[hash:base64:6]',
                            },
                        },
                    ],
                }),
            },
        ],
    },
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
        },
    },
    plugins: config.plugins.filter(
        (plugin) => plugin instanceof HtmlWebpackPlugin === false,
    ),
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: 'dist',
        libraryTarget: 'umd',
        library: camelCase(
            require(path.resolve(__dirname, '..', 'package.json')).name,
        ),
        filename: '[name].js',
        // this is a weird hack to make the umd build work in node
        // https://github.com/webpack/webpack/issues/6525#issuecomment-417580843
        globalObject: 'typeof self !== "undefined" ? self : this',
    },
});
