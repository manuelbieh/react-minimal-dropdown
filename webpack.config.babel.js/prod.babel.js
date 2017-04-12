import config from './dev.babel';
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
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
});
