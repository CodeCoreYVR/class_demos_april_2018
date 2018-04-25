let stack = [];

function push(element) {
  stack.push(element)
}

function pop(element) {
  return stack.pop();
}

function display() {
  for(let i of stack) {
    console.log(i);
  }
}

push(1);
push(5);
push(4);
push(7);
console.log('-----');
display();
console.log('-----');
pop();
console.log('-----');
display();
console.log('-----');
pop();
console.log('-----');
display();
console.log('-----');
