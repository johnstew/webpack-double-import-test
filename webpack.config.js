const webpack = require("webpack");
const path = require("path");

const config = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
};

module.exports = config;
