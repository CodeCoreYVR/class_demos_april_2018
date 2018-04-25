let queue = [];

function enqueue(element) {
  queue.push(element);
}

function dequeue() {
  return queue.shift();
}

function display() {
  for(let e of queue) {
    console.log(e);
  }
}

enqueue(1);
enqueue(2);
enqueue(3);
enqueue(4);
console.log('>>>>>>>>');
display();
console.log('>>>>>>>>');
dequeue();
console.log('>>>>>>>>');
display();
console.log('>>>>>>>>');
dequeue();
console.log('>>>>>>>>');
display();
console.log('>>>>>>>>');
