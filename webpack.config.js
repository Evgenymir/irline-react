const path = require('path');

module.exports = {
    entry: {
        app: ['babel-polyfill', './src/index.jsx'],
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            }, {
                test: /\.s[ac]ss$/i,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ],
            }, {
                test: /\.(woff|woff2|eot|ttf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                    },
                },
            },
        ],
    },
};
