let path = require("path");
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/game.js",
    output: {
        path: path.resolve(__dirname, "./dist/"),
        filename: "game.bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Circuit Runner'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                include: path.resolve(__dirname, "./src"),
                loader: "babel-loader",
                options: {
                    presets: ["env"]
                }
            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, "./src"),
                use: [
                    "htmllint-loader",
                    {
                        loader: "html-loader",
                    }
                ]
            }
        ]
    },
    resolve: {
        modules: ["node_modules", path.resolve(__dirname, "./src")],
        extensions: [".js", ".json", ".ts"]
    },
    externals: ["phaser"],
    devServer: {
        contentBase: './dist',
        port: 9000,
        hot: true
    }
}