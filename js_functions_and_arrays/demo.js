// FUNCTIONS

// DEMO: Increment Function

function increment(num) {
  return num + 1;
}

// DEMO: Rude Bot

function randomInt(n) {
  return Math.ceil(Math.random() * n);
}

function insult(name) {
  const randomValue = randomInt(3);

  // The moment a function encounters the `return` keyword
  // it will exit and return the value to right of the keyword
  // as its output.
  // All lines of code that come after that return will be
  // ignored.
  if (randomValue === 1) {
    return `${name}, you doofus!`;
  } else if (randomValue === 2) {
    return `Your mother was a hamster, ${name}`;
  } else {
    return `${name}, your father smelt of elderberries`;
  }
}

// EXERCISE: Repeat

function repeat(str, num) {
  let newStr = "";
  for (let i = 0; i < num; i += 1) {
    newStr += str;
  }
  return newStr;
}

// Find a method to rearrange an array order
// Use Array#sort. Be careful because orders an
// array alphabetically even if the array contains
// only numbers.

let arr1 = [3, 5, 2, 8, 1, 10, 23, 11, 56];
arr1.sort(); // This will sort the array incorrectly
// returns [ 1, 10, 11, 2, 23, 3, 5, 56, 8 ]

// To sort it correctly, pass sort a function to tell how
// to sort.

arr1.sort(function(a, b) {
  return a - b;
});
// returns [ 1, 2, 3, 5, 8, 10, 11, 23, 56 ]

// In reverse order, ...
arr1.sort(function(a, b) {
  return b - a;
});
// returns [ 56, 23, 11, 10, 8, 5, 3, 2, 1 ]

// ITERATING OVER ARRAYS

// Using a plain for loop

let arr2 = ["Jon", "Cersei", "Daenerys"];

console.log("==== Iterating with `for` ====");
for (let i = 0; i < arr2.length; i += 1) {
  console.log("index:", i, "value:", arr2[i]);
}

console.log("==== Iterating with `for .. of` ====");
for (let value of arr2) {
  console.log("value:", value);
}

// EXERCISE: Sum

function sum(nums) {
  let total = 0;
  for (let num of nums) {
    if (typeof num === "number") {
      total += num;
    }
  }
  return total;
}

// OBJECTS

const daeny = {
  firstName: "Daenerys",
  lastName: "Targaryen",
  title: ["Queen of Mereen", "Khaleesi", "Queen of the Seven Kingdoms"]
};

// DEMO: Word Lengths

function wordLengths(sentence) {
  let wordsWithLength = {};
  for (let word of sentence.split(" ")) {
    wordsWithLength[word.toLowerCase()] = word.length;
  }
  return wordsWithLength;
}
// usage: wordLengths("Winter is past")

// Iterating over Objects

// DEMO: Keys to Arrays

function keys(obj) {
  let arrOfKeys = [];
  for (let key in obj) {
    arrOfKeys.push(key);
  }
  return arrOfKeys;
}

function values(obj) {
  let arrOfKeys = [];
  for (let key in obj) {
    arrOfKeys.push(obj[key]);
  }
  return arrOfKeys;
}
