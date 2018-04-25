function factorialLoop(number) {
  let result = 1;
  for(let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}

console.time('Factorial Loop');
for(let i = 0; i < 1e7; i++) {
  factorialLoop(100);
}
console.timeEnd('Factorial Loop');

function factorial(number) {
  if(number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

console.time('Factorial Recursive');
for(let i = 0; i < 1e7; i++) {
  factorial(100);
}
console.timeEnd('Factorial Recursive');
