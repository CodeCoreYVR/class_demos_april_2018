const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");

// ROUTER REQUIRES
const welcomeRouter = require("./routes/welcome");

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

// Body Parser

app.use(express.urlencoded({ extended: true }));

// Cookie Parser
app.use(cookieParser());

// Custom Middleware

// A middleware is function that takes three arguments:
// request, response and next. We pass this function to
// the "app.use()" method. Inside the middleware, we
// call "next()" when its done.
app.use((request, response, next) => {
  const username = request.cookies.username;

  response.locals.username = "";
  if (username) {
    // All properties of "response.locals" are available
    // as variables inside all templates that Express
    // renders
    response.locals.username = username;
    console.log(`🤓 User's username is ${username}`);
  }

  next(); // This tells Express that this middleware is done.
  // If next is not called or the response isn't ended,
  // the client (i.e. browser) will wait forever.
  // Express will then call the next middleware in order.
});

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

// The first argument of "app.use()" when used with a
// router will be fixed to all route paths defined inside
// the router.
app.use("/", welcomeRouter);

const PORT = 4545;
const DOMAIN = "localhost";
app.listen(PORT, DOMAIN, () => {
  console.log(`💻 Server listening on http://${DOMAIN}:${PORT}`);
});
