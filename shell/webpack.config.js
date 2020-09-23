const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      library: { type: "var", name: "shell" },
      remotes: {
        module1: "module1", // Add remote (Second project)
      },
      shared: ["react", "react-dom"],
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};
