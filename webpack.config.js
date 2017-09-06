const path = require('path');
const webpack = require('webpack');

const src = path.join(__dirname, 'src');
const build = path.join(__dirname, 'build');

module.exports = {
    entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client', `${src}/client`],
    output: {
        path: build,
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015', 'stage-0'],
                        plugins: ['react-hot-loader/babel']
                    }
                }]
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.json']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};