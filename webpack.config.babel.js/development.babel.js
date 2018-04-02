import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import camelCase from 'uppercamelcase';

export default {
    entry: {
        example: './src/example/example.js',
    },
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
                // exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: { modules: true, localIdentName: '[name]__[local]' },
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
        // new webpack.HotModuleReplacementPlugin(),
        new CaseSensitivePathsPlugin(),
        new ExtractTextPlugin({
            filename: 'css/[name].css',
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
        publicPath: 'example',
        libraryTarget: 'umd',
        library: camelCase(require(path.resolve(__dirname, '..', 'package.json')).name),
        filename: '[name].js',
    },
};
