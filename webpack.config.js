const path = require('path');

const src = path.join(__dirname, 'src')
const build = path.join(__dirname, 'build')

module.exports = {
    entry: `${src}/client`,
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
                        presets: ['react', 'es2015']
                    }
                }]
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.json']
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 9000
    }
};