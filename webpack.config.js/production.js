const path = require('path');
const config = require('./development');
const camelCase = require('uppercamelcase');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = Object.assign({}, config, {
    entry: {
        index: './src/Dropdown.js',
    },
    mode: 'production',
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
                    use: [{ loader: 'css-loader', options: { modules: true } }],
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
    output: {
        path: path.resolve(__dirname, '..'),
        publicPath: 'dist',
        libraryTarget: 'umd',
        library: camelCase(
            require(path.resolve(__dirname, '..', 'package.json')).name,
        ),
        filename: '[name].js',
    },
});
