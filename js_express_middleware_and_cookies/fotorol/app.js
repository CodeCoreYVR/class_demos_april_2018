const express = require("express");
const logger = require("morgan");
const fs = require("fs");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

// MIDDLEWARE
// HTTP Request Logger
app.use(logger("dev"));
// Static Assets
// Use path.join to combine strings into directory paths.
// Example: path.join("fotorol", "public") -> "fotorol/public"

// __dirname is global variable useable in file run by Node.
// It gives the full path, beginning from the root of your
// OS, to the file where __dirname is being used.
console.log("Full path to app.js:", __dirname);
app.use(express.static(path.join(__dirname, "public")));

// URL http://localhost:454545/hello_world?name=steve&message=hello+there
// scheme   | host     | port| path       | query string

// The "scheme" identifies the protocol being used.
// Typically, HTTP or HTTPS, but could SSH, FTP, TCP, etc.

// The "host" identify the domain or IP that holds the server.

// The "path" identifes the specific resource we want to make
// request to on the server.

// The "query string" is way to store data in a URL.
// It uses the "url encoding" format.
// A query sting always begins with "?".
// It is then followed by key-values pairs.
// A key value pair defined as such {key}={value}
// Pairs are seperated by "&".

// This tells our app to respond to a GET request only
// if the path is "/hello_world". When request is made to
// that location by a client (i.e. browser), the callback
// at argument 2 is called.

// Inside the callback, we write code that builds the response.
app.get("/hello_world", (request, response) => {
  // The "request" argument is an object that represents
  // the request being made by a client to the server. It
  // contains all the information needed to respond back.

  // The "response" argument is also an object that represents
  // the server's reply to the client. We use it to end a response
  // and send back data to the client.
  response.send("Hello, Thing!");
});

app.get("/", (request, response) => {
  // `response.render` is used to render the contents of a
  // template file located in the "views" directory.
  // As a first argument, pass the path to the file
  // beginning the "/views" directory without the file
  // extension.
  response.render("index");
});

// HTTP VERB: GET, URL: http://localhost:4545/contact_us
app.get("/contact_us", (request, response) => {
  console.log(request.query);

  // To access data in a query string of a url,
  // use the property "query" of request. "request.query"
  // will have a JavaScript that's been parsed
  // from the query string.

  const name = request.query.name;
  const message = request.query.message;

  response.render("contact_us", { name: name, message: message });
});

app.get("/things", (request, response) => {
  fs.readFile("things", "utf8", (error, data) => {
    const lines = data.split("\n");

    // To pass variables to templates, give
    // response.render an object as a second argument.
    // All key-values from that object will act as
    // local variables inside of the rendered template.

    // Meaning that for the line below, "lines" will become
    // a variable in the "things" template.
    response.render("things", { lines: lines });
  });
});

const PORT = 4545;
const DOMAIN = "localhost";
app.listen(PORT, DOMAIN, () => {
  console.log(`💻 Server listening on http://${DOMAIN}:${PORT}`);
});
