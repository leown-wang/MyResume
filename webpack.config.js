const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'production',
    entry:{
        a: './src/a.js',
        b: './src/b.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "a.html",
            chunks: ['a']
        }),
        new HtmlWebpackPlugin({
            filename: "b.html",
            chunks: ['b']
        })
    ]
};