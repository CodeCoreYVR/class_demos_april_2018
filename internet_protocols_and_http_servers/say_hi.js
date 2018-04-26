function sayHi(name) {
  return `Hi ${name}`;
}

function sayBye(name) {
  return `Bye ${name}`;
}
// you can export anything you'd like such as objects, arrays, functions,
// strings...etc. It's most common to export objects and functions
module.exports = { hi: sayHi, bye: sayBye };
