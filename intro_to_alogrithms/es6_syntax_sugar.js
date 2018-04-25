const arr = [1, 2, 3, 4, 5];

// this defineds new varibles a, b and rest
const [a, b, , ...rest] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [4, 5]

// note that `3` has not been included in the `rest` array because we simply
// put `, ,` before `...rest` so the third element of the array has been
// assigned to nothing

const obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
const {a, b, ...rest} = obj;
console.log(a); // 1
console.log(b); // 2
console.log(rest); // {c: 3, d: 4, e: 5}

// Note that we must have `a` and `b` as keys in the `obj` objects


function displayAll([first, ...rest]) {
  console.log(first);
  console.log(rest);
}

displayAll([1, 2, 3, 4]);
displayAll(['hi', 'hello', 'hola']);

function displayObj({a, ...rest}) {
  console.log(a);
  console.log(rest);
}

displayObj({a: 'abc', b: 'Hello'});
displayObj({a: 'xyz'});
