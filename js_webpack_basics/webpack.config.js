const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
  },
  module: {
    // We configure rules for importing modules
    // as an array of objects.
    rules: [
      // A rule usually include a `test` which
      // a regular expression that used to check
      // what kind of file is being imported.
      {
        // The test below will tell Webpack
        // that file ends in .png, .jpg or .gif
        // should be loaded by "file-loader".
        test: /\.(png|jpg|gif)$/,
        // A `loader` is package that we install
        // that tells how to process files other
        // that JavaScript.
        loader: "file-loader",
        // Every loader will have its set of options.
        // You can specify with the `option` property
        // is a module rule.
        options: {
          outputPath: "images/"
        }
      },
      {
        test: /\.css$/,
        // loader: ["style-loader", "css-loader"]
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
            // options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "💁🏻‍♀️Webpack Demo"
    })
  ]
};
