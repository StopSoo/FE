const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
    fallback: { vm: false },
  },
  devtool: "source-map",
  devServer: {
    static: path.resolve(__dirname, "public"),
    port: process.env.PORT,
    historyApiFallback: true, // public폴더에서 못 찾은 리소스에 대해 index.html을 제공.
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
