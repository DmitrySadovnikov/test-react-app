var HTMLWebpackPlugin = require("html-webpack-plugin");
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + "/app/index.html",
    filename: "index.html",
    inject: "body"
});

module.exports = {
    entry: __dirname + "/app/index.js",
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    output: {
        filename: "transformed.js", //This will save your transformed JavaScript into a new file named build/transformed.js.
        path: __dirname + "/build"
    },
    plugins: [HTMLWebpackPluginConfig]
};
