"use strict";
const log = console.log;

// JS: HIGHER-ORDER FUNCTIONS

// Exercise: toArrowFunction

// function add(a, b) {
//   return a + b;
// }

const add = (a, b) => a + b;

// function notNull(obj) {
//   return obj !== null;
// }

const notNull = obj => obj !== null;

// function flip(fn) {
//   return function(a, b) {
//     return fn(b, a);
//   };
// }

// const flip = fn =>
//   function(a, b) {
//     return fn(b, a);
//   };

const flip = fn => (a, b) => fn(b, a);
const concat = (strA, strB) => strA.concat(strB);

// Example usage:
// const str1 = "Hello";
// const str2 = "World";

// console.log("concat");
// console.log(concat(str1, str2));
// console.log("flipped concat");
// console.log(flip(concat)(str1, str2));

// More on Arrow Functions

// Arrow functions can't be as constructors.

// Arrow functions do not have their own "this". They use the
// "this" of the block they were created in.

const myArrow = () => this;
const myFunc = function() {
  return this;
};

const myObject = {
  myProp: "A property value",
  myArrow: myArrow,
  myFunc: myFunc,
  myInlineArrow: () => this,
  myMethod() {
    const myArrow = () => this;
    const myFunc = function() {
      return this;
    };

    log(`---- Inside myObject.myMethod() ----`);
    log(`myArrow():`, myArrow());
    log(`myFunc():`, myFunc());
  }
};

/*
log(`---- "this" for Arrow functions ----`);
log(`myObject.myArrow():`, myObject.myArrow());
log(`myObject.myFunc():`, myObject.myFunc());
log(`myObject.myInlineArrow():`, myObject.myInlineArrow());
myObject.myMethod();
*/

// Demo: A Loud Function
// Exercuse: Custom Logger

const num5 = () => 5;

// Math.max

// !!! A function that can take any number of
// arguments is named a "variadic function".
function loud(logFn, fn, ...args) {
  logFn(`Calling ${fn.name || "anonymous"}...`);
  logFn(`With args of "${args.join(", ")}"`);
  const returnValue = fn(...args);
  logFn(`Called ${fn.name || "anonymous"} and returned ${returnValue}`);
  return returnValue;
}

// Example usage:

num5;
// () => 5
num5();
// 5
// loud(console.log, num5);
// 5
// loud(num5());
// Throws an error because loud attempted to call
// the return value of num5 which is 5. Numbers are
// not functions.
// loud(console.info, Math.max, 1, 2, 3, 4, 6, 8);
// loud(console.warn, add, 4, 4);

// Demo: Higher-Order Function – Each

function each(fn, arr) {
  for (let i = 0; i < arr.length; i += 1) {
    fn(arr[i], i);
  }
}

// Example usage:

// each(
//   (value, index) =>
//     console.log(`My value is ${value} and it's index is ${index}`),
//   ["a", "b", "c"]
// );

// Exercise: Higher-Order Function – Map

function map(fn, arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArr.push(fn(arr[i], i));
  }
  return newArr;
}

// Example Usage:

map((v, i) => v * i, [1, 2, 3, 4, 5]); // (5) [0, 2, 6, 12, 20]
map((v, i) => v.toString().repeat(i), [1, 2, 3, 4, 5]);
// (5) ["", "2", "33", "444", "5555"]

const toString = x => x.toString();

map(toString, [1, 2, 3, 4, 5]); // (5) ["1", "2", "3", "4", "5"]

// Demo: Higher-Order Function – setTimeout

// setTimeout is an asynchronous function meaning
// that JavaScript will not pause until setTimeout has called
// its callback. JavaScript will continue executing the
// lines that come after.

// This means that could that depends on code inside of
// setTimeout's callback must be also inside the callback.

function setTimeoutDemo() {
  let count = 0;
  console.log("Before setTimeout:", count);
  setTimeout(() => {
    count += 2;
    console.log("Waited 5000ms");
    console.log("Inside setTimeout callback:", count);
  }, 0);
  console.log("After setTimeout:", count);
}

// Scope & Closures

// Blocks in JavaScript can be created by simply
// surrounding with {} braces. These blocks receive
// their scopes. Variables (declared with let and const)
// will only exist inside the block.)

let myOtherVar = "bar";
let shadowedVar = "bing";
console.log("Before block:", shadowedVar);
{
  let myVar = "foo";
  let shadowedVar = "bambam";
  // shadowedVar here overwrites the shadowedVar from
  // the parent block. Inside this block, only
  // this shadowedVar is accessible. This is called
  // "shadowing".

  console.log("Inside block:", myVar, myOtherVar, shadowedVar);
  myOtherVar = "baz";
}
console.log("After block:", myOtherVar, shadowedVar);

// console.log("After block:", myVar);
// myVar is declared inside of the block and ceases
// to exist afterwards meaning that calling is
// going to give us error. We say that
// "myVar" is scoped to the block.

// Scopes have access to variables declared in
// ancestor block.

// These rules apply to free blocks (like above),
// loop blocks (e.g. for, while, etc), if-blocks,
// function blocks, etc.

// Demo: Looking at Scope

function myFn(myArg) {
  let myVar = "foo bar";
  console.log(myArg, myVar);
}

console.dir(myFn);
// Look at [[Scopes]] to see the scopes that myFn
// has access to.

function myParentFn(parentArg) {
  let parentVar = "Inside Parent Fn";

  // Whenever myParentFn is called, a myChildFn
  // is created. The myChildFn will a get copy of the
  // myParentFn's scope (all the variables created in
  // its body including the arguments). This copy is
  // called the closure.

  // It allows myChildFn to access myParentFn's arguments
  // and variables even if myParentFn created it some time
  // ago.

  function myChildFn(childArg) {
    let childVar = "Inside Child Fn";
    console.log(parentArg, parentVar, childArg, childVar);
  }

  return myChildFn;
}

// Demo: What? Loud is evolving!

function loudWith(logFn, fn) {
  return (...args) => {
    return loud(logFn, fn, ...args);
  };
}

const loudAdd = loudWith(console.log, add);
const loudMax = loudWith(console.log, Math.max);
// loudAdd(4, 5);
// loud(console.log, add, 4, 5);
