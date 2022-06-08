const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const mode = process.env.NODE_ENV || "development";
const nodeExternals = require("webpack-node-externals");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "index-bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    devtool: mode === "development" ? "inline-source-map" : false,
    module: {
        rules: [
            {
                test: /\js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react",
                            ],
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    target: "node",
    externals: [nodeExternals()],
    externalsPresets: {
        node: true,
    },
};
