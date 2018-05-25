// JS: Promises

// To create Promises, use the Promise constructor.
// It requires a callback as its only argument which
// we name "resolver".

new Promise(() => {});

new Promise((resolve, reject) => resolve("Hello, World!"));
// The "resolver" callback gets two arguments:
// - The first argument is a function usually named "resolve".
//   When it is called, the promise transitions from the "pending"
//   state to the "resolved" state. And, the single argument given
//   to "resolve" becomes the promise's value.
new Promise((resolve, reject) => reject("Goodbye, World!"));
// - The second argument is a function usually named "reject"
//   When it is called, the promise transitions from the "pending"
//   state to the "rejected" state. And, the single argument given
//   to "reject" becomes the promise's value.

new Promise((resolve, reject) => {
  // The first of "resolve" or "reject" that is called
  // is the only one that will transition the promise to its new
  // state and set its promise value.

  // It's similar to using the return keyword in a function.
  // However, they're not keywords.

  reject("Goodbye, World!");
  resolve("Hello, World!");
  resolve("Yo, World!");
});

// Demo: flipCoin

function flipCoin() {
  return new Promise((resolve, reject) => {
    // Often when creating our own promises to handle asynchronous code,
    // we create function that returns promise where we write
    // the asynchronous code in the "resolver" callback of the promise.

    const coinFace = ["HEADS", "TAILS"][Math.floor(Math.random() * 2)];
    resolve(coinFace);
  });
}

// Demo: Roll a Die

function rollDie(n) {
  return new Promise((resolve, reject) => {
    const face = Math.ceil(Math.random() * n);
    resolve(face);
  });
}

// Demo: Throwing The Coin Too Far

function random(n) {
  return Math.floor(Math.random() * n);
}

function throwCoin() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["HEADS", "TAILS"][random(2)]);
    }, 1000 + random(2000));

    setTimeout(() => {
      reject("Coin was thrown too far!");
    }, 1000 + random(2000));
  });
}

// Accessing Promise Values

// To read the promise value when a promise transitions from
// "pending" to "resolved", use the ".then()" method with a callback.
throwCoin().then(promiseValue => {
  // This callback is only called once the promise is resolved.
  // As its only argument, it will receive the promise value.
  console.log(promiseValue);
  // This call back does not get called when the promise
  // transitions to "rejected".
});

throwCoin().catch(promiseValue => {
  // This callback is only called once the promise is rejected.
  // As its only argument, it will receive the promise value.
  console.log(promiseValue);
});

function joinFlips() {
  let flips = [];

  // BAD!
  // throwCoin().then(value => flips.push(value));
  // throwCoin().then(value => flips.push(value));
  // return flips;

  // .then() is a method of a Promise instance
  return (
    throwCoin()
      .then(value => {
        flips.push(value);
        return throwCoin();
      }) // .then() will always return a Promise
      // allowing you chain .then() after .then() forever!
      .then(value => {
        flips.push(value);
        return throwCoin();
      }) // If the callback inside of .then() returns a promise,
      // that .then() method will return THAT promise.
      // In this case, it'll return the promise returne by throwCoin().
      .then(value => {
        flips.push(value);
        return flips; // Ex: new Promise((resolve) => resolve(flips))
      }) // If the callback inside of .then() returns a non-promise,
      // it will create a new promise that is resolved with the
      // return value as its promise value.
      .catch(promiseValue => {
        // You can also chain .catch() method. If any of promises in the
        // the .then() chain "reject", all remaining .then() calls will
        // be skipped and the closest .catch() callback will execute.

        // Otherwise, .catch() has the same behaviour has .then() meaning
        // that it will always return a promise, it will wrap non-promises
        // into a promise and it will a promise itself.
        console.log("In the catch callback because something went wrong!");
        console.error(promiseValue);
        return promiseValue;
      })
  );
}

// Demo: Create a Delay Function
// Exercise: Upgrade Delay

// With this function, we promise "setTimeout" allowing
// us to use version in promise and any other promise related code.
function delay(ms, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Waited for", ms, "and returned", value);
      resolve(value);
    }, ms);
  });
}

function delayDemo() {
  return delay(3000)
    .then(() => flipCoin())
    .then(face => {
      console.log(face);
      return delay(1000);
    })
    .then(() => flipCoin())
    .then(face => console.log(face));
}

// Promise Utility Methods

// Promise.resolve(<promise-value>) is used to create a promise that is
// resolved with <promise-value>.

// Promise.reject(<promise-value>) is used to create promise that is
// already reject with <promise-value>.

// Promise.all(<array-of-promise>)
// Use Promise all promises in array in parrallel. It returns
// that will resolve once all promises in the array are resolved.
// Its promise value will be an array of all the resolved values in
// the correct order.

function sequentialDemo() {
  console.time("sequentialDemo");
  return delay(1000 + random(2000), 10)
    .then(() => delay(1000 + random(2000), 20))
    .then(() => delay(1000 + random(2000), 30))
    .then(() => delay(1000 + random(2000), 40))
    .then(() => delay(1000 + random(2000), 50))
    .then(() => console.timeEnd("sequentialDemo"));
}

function parrallelDemo() {
  console.time("parallelDemo");
  return Promise.all([
    delay(1000 + random(2000), 10),
    delay(1000 + random(2000), 20),
    delay(1000 + random(2000), 30),
    delay(1000 + random(2000), 40),
    delay(1000 + random(2000), 50),
    Promise.reject("Stuff!")
  ]).then(promiseValue => {
    console.log("Promise Value:", promiseValue);
    console.timeEnd("parallelDemo");
  });
}
