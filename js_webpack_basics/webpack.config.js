const path = require("path");

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
  // and will be used as the name of the output files
  // by default.
  entry: {
    app: "./src/app.js"
  },
  // The following can be used to configure the output files
  output: {
    // `path` specify the directory where processed files
    // are saved.
    path: path.join(__dirname, "dist"),
    // `filename` can be used to specify the name of
    // your bundled files.
    // filename: "bundle.js"
    // You can use [name] in the `filename` to interpolate
    // the name of entry file `app` in this case.
    filename: "[name]_bundle.js"
  }
};
