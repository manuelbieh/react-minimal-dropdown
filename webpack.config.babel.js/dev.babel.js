import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    entry: {
        example: './example/example.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{ loader: 'babel-loader' }]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{ loader: 'css-loader', options: { modules: true, localIdentName: '[name]__[local]' }}]
                })
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, '..'),
        compress: true,
        port: 9000
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: 'css/[name].css',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        new webpack.NamedModulesPlugin()
    ],
    output: {
        path: path.resolve(__dirname, '..', 'lib'),
        publicPath: '/',
        libraryTarget: 'umd',
        library: require(path.resolve(__dirname, '..', 'package.json')).name,
        filename: '[name].js'
    }
};
