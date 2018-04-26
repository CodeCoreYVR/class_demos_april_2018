// `hi` in here will be assigned to whatever is exported from the `say_hi.js`
// file which is the `sayHi` function
const greetings = require('./say_hi.js');

console.log(greetings.hi('john'));
console.log(greetings.bye('john'));
