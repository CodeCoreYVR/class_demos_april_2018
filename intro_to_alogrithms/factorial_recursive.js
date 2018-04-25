function factorialLoop(number) {
  let result = 1;
  for(let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}

function factorial(number) {
  if(number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

console.log(factorial(1));
console.log(factorial(0));
console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(100));
console.log(factorialLoop(1));
console.log(factorialLoop(0));
console.log(factorialLoop(5));
console.log(factorialLoop(10));
console.log(factorialLoop(100));
