// When writing a Webpack config, we must use
// Node's module style (i.e. require and module.exports)
// because this file is not processed by Webpack.
module.exports = {
  mode: "development",
  // You can specify entry in multiples ways.
  // entry: "./src/index.js"
  // There can be multiple per project.
  // entry: ["./src/index.js", "./src/index_2.js"]
  // When using an object keys will act as names
  // and will be used the name of the output files
  // by default.
  entry: {
    app: "./src/app.js"
  }
};
