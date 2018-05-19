let path = require("path");
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/game.ts",
    devtool: 'inline-source-map',
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
                test: /\.ts|\.tsx$/,
                include: path.resolve(__dirname, "./src"),
                use: 'awesome-typescript-loader',
                exclude: /node_modules/
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