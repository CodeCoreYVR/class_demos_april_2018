function sum(array) {
  if(array.length === 0) {
    return 0;
  } else {
    return array[0] + sum(array.slice(1))
  }
}

console.log(sum([1,2,3,4,5]));
console.log(sum([1,2,3]));
console.log(sum([1]));
console.log(sum([]));

// using ES6 destructuring syntax sugar

function sum([first, ...rest]) {
  if(first === undefined) {
    return 0;
  } else {
    return first + sum(rest)
  }
}

console.log(sum([1,2,3,4,5]));
console.log(sum([1,2,3]));
console.log(sum([1]));
console.log(sum([]));
