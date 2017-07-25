const path = require('path');

const src = path.join(__dirname, 'src')
const public = path.join(__dirname, 'public')

module.exports = {
    entry: `${src}/client`,
    output: {
        path: public,
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
    }
};