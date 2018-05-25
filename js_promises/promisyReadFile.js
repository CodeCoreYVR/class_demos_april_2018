const fs = require("fs");

// .readFile() is a method of "fs" which is a library from Node.
// - Its first argument is the path to a file
// - Its second argument the encoding of the file (i.e. "utf8" for text)
// - Its third argument is a callback that is called once
//   node has finished reading the file.
/*
fs.readFile("winterStuff", "utf8", (error, data) => {
  console.log(data);
});
*/

function readFile(path, encoding = "utf8") {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (error, data) => {
      if (error) return reject(error);
      resolve(data);
    });
  });
}

// let text = "";
// readFile("helloWorld")
//   .then(str => {
//     text += str;
//     return readFile("winterStuff");
//   })
//   .then(str => {
//     text += str;
//     console.log(text);
//   });

let files = ["helloWorld", "winterStuff"];

// let p = new Promise(resolve => resolve());
let p = Promise.resolve();

let contents = "";

for (let file of files) {
  p = p
    .then(() => {
      return readFile(file);
    })
    .then(str => (contents += str));
}

p.then(console.log);
