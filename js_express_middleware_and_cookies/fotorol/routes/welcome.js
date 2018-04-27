const express = require("express");
const fs = require("fs");
const router = express.Router();

// This tells our app to respond to a GET request only
// if the path is "/hello_world". When request is made to
// that location by a client (i.e. browser), the callback
// at argument 2 is called.

// Inside the callback, we write code that builds the response.
router.get("/hello_world", (request, response) => {
  // The "request" argument is an object that represents
  // the request being made by a client to the server. It
  // contains all the information needed to respond back.

  // The "response" argument is also an object that represents
  // the server's reply to the client. We use it to end a response
  // and send back data to the client.
  response.send("Hello, Thing!");
});

router.get("/", (request, response) => {
  // Read cookies coming from the client with the
  // "request.cookies" property. Cookies are parsed
  // into an object.
  console.log(request.cookies);
  // `response.render` is used to render the contents of a
  // template file located in the "views" directory.
  // As a first argument, pass the path to the file
  // beginning the "/views" directory without the file
  // extension.
  response.render("index");
});

// HTTP VERB: GET, URL: http://localhost:4545/contact_us
router.get("/contact_us", (request, response) => {
  console.log(request.query);

  // To access data in a query string of a url,
  // use the property "query" of request. "request.query"
  // will have a JavaScript that's been parsed
  // from the query string.

  const name = request.query.name;
  const message = request.query.message;

  response.render("contact_us", { name: name, message: message });
});

router.get("/things", (request, response) => {
  fs.readFile("things", "utf8", (error, data) => {
    const lines = data.split("\n");

    // The "cookie-parser" allows you to store
    // any kind of javascript objects including arrays.
    // They will be stored as string, but when read
    // again with "request.cookies" they will be turned
    // back into the original objects.
    response.cookie("things", lines);

    // When working with cookies, they can not be mutated. You
    // will have to re-write them with "response.cookie()"
    // everytime you to change them.

    // To pass variables to templates, give
    // response.render an object as a second argument.
    // All key-values from that object will act as
    // local variables inside of the rendered template.

    // Meaning that for the line below, "lines" will become
    // a variable in the "things" template.
    response.render("things", { lines: lines });
  });
});

// The two following routes match on the same path
// but use two different http verbs (methods).
// - GET corresponds to reads. We use to show information
//   to a client.
// - POST corresponds to writes. We use it create things
//   for a client such as cookies, new rows a db, files, etc.
router.get("/sign_in", (request, response) => {
  response.render("sign_in");
});

const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7;
router.post("/sign_in", (request, response) => {
  // When a format submits its data with a POST, its data
  // will not be available in the "request.query". Instead,
  // you all have use Express' "express.urlencoded()" middleware
  // which will parse the form data into "request.body".
  console.log(request.body);

  // Use "response.cookie()" method which was added by
  // the "cookie-parser" middleware to create a cookie.
  // The first arg. is the name of the cookie, the second
  // is the value for the cookie and the last (optional)
  // is object configuring the cookie.
  response.cookie("username", request.body.username, {
    maxAge: COOKIE_MAX_AGE
  });

  response.redirect("/");
});

router.post("/sign_out", (request, response) => {
  response.clearCookie("username");
  response.redirect("/");
});

// When this file is required with the "require()" function,
// that function will return the value on the right-hand side
// "module.exports =" (or, the value that is assigned to "module.exports")
module.exports = router;
