import path from 'path';
import config from './development.babel';
import camelCase from 'uppercamelcase';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default Object.assign({}, config, {
    entry: {
        index: './src/Dropdown.js',
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
        'prop-types': {
            root: 'PropTypes',
            commonjs2: 'prop-types',
            commonjs: 'prop-types',
            amd: 'prop-types',
        },
    },
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: 'dist',
        libraryTarget: 'umd',
        library: camelCase(require(path.resolve(__dirname, '..', 'package.json')).name),
        filename: '[name].js',
    },
});
