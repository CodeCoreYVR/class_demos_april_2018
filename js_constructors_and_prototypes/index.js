// DEMO: ArrayExtras

function first(arr) {
  return arr[0];
}

const ArrayExtras = {
  // `last` is a property whose value is a function.
  // This makes a **method**.
  last: function last(arr) {
    return arr[arr.length - 1];
  },
  // You can also assign function from variable to a property
  // to create a method. The function doesn't have to created
  // inline like above.
  first: first,
  // This short-hand syntax only works when creating a method.
  // If you try to create a function like this outside of an
  // object, you will get a syntax error.
  take(arr, n) {
    return arr.slice(0, n);
  },

  // Exercise: Add toObject
  toObject(arr) {
    let newObj = {};
    // Here we're using array destructuring to assign the first
    // value of the sub-arrays we are iterating to the variable
    // `key` and the second to the variable `val`.
    for (let [key, val] of arr) {
      newObj[key] = val;
    }
    return newObj;
  }
};

// Keyword `this`

// Use `this` inside of method to get the object that owns it.

// Demo: A Counter

const counter = {
  step: 1,
  count: 0,
  inc() {
    // counter.count += 1; // BAD!
    this.count += this.step;
    // Exercise: Configurable Steps
    // To chain methods on an object, return the object
    // that you want to chain in this case this means returning
    // object itself, `this`.
    return this;
  },
  dec() {
    this.count -= this.step;
    // Exercise: Configurable Steps
    return this;
  },
  now() {
    return this.count;
  },
  set(newCount) {
    this.count = newCount;
  },

  // Exercise: Configurable steps
  setStep(n) {
    this.step = n;
  }
};

// The behaviour of `this`

/*
console.log(`Inside script`, this);

const can = {
  taloupe: "Hello!",
  touchThis() {
    return this;
  }
};

console.log(`Inside method can.touchThis()`, can.touchThis());

function whatAboutMe() {
  return this;
}

console.log(`Inside a plain function`, whatAboutMe());

can.whatAboutMe = whatAboutMe;

console.log(`Inside method can.whatAboutMe()`, can.whatAboutMe());

const cant = {
  erbury: "Oi!",
  touchThis: can.touchThis
};

console.log(`Inside method cant.touchThis()`, cant.touchThis());
*/
// `this` is determined dynamically. That is it's determined at
// the time the method (or function) is called. It will be
// the object that owns the function at that time meaning that
// we can change what `this` refers by re-assign functions
// to different objects.

// Constructors

// A constructor's `this` (only when called with `new` keyword)
// is a new empty instance of the constructor.
/*
function Doggo(name, age) {
  this.name = name;
  this.age = age;

  return "Please call me with `new` instead";
  // `return` is ignored when a function is called with
  // `new`.
}

const sonicSam = new Doggo("Sonic Sam", 6);
// The above call the Doggo function as a constructor
// and returns an instance of the Doggo constructor.

// Demo: Doggo Learned Bark

// To add a property (or method) that shared between all instance
// of a constructor, add that method to the prototype.

// We can access the prototype for instance of a constructor
// by using the property `.prototype` of the constructor.

Doggo.prototype.bark = function() {
  return `${this.name} barked "Bork bork!"`;
};


// To get the prototype of an instance, you can use
// the special property __proto__ or better yet
// use the method `Object.getPrototypeOf()`.

sonicSam.__proto__ === Doggo.prototype; // true
sonicSam.__proto__ === Object.getPrototypeOf(sonicSam); // true

// The prototype of a Doggo instance is not the same as
// the prototype of the Doggo constructor.
sonicSam.__proto__ !== Doggo.__proto__; // true

// To check if an object is an instance prototype, use the
// `instanceof` operator.

sonicSam instanceof Doggo; // true
sonicSam instanceof Array; // false
sonicSam instanceof Object; // true
[] instanceof Object; // true
sonicSam instanceof String; // false

*/
// Inheritance

// Demo: Modeling Doggo Fighter

{
  function Doggo(name, age) {
    this.name = name;
    this.age = age;
  }

  Doggo.prototype.bark = function() {
    return `${this.name} barked "Bork bork!"`;
  };

  function DoggoFighter(name, age, specialAbility) {
    this.name = name;
    this.age = age;
    this.specialAbility = specialAbility;
  }

  // To inherit from another prototype, assign an instance of
  // of the constructor we want to inherit from.
  DoggoFighter.prototype = {};
  Object.setPrototypeOf(DoggoFighter.prototype, Doggo.prototype);
  // DoggoFighter.prototype = new Doggo();

  DoggoFighter.prototype.fight = function(doggo) {
    return `${[doggo.name, this.name][Math.floor(Math.random() * 2)]} won!`;
  };

  const bobBuilder = new Doggo("Bob Builder", 10);
  const moneybagsMichael = new DoggoFighter(
    "Moneybags Michael",
    14,
    "Making it Rain"
  );

  moneybagsMichael.fight(bobBuilder);

  moneybagsMichael instanceof DoggoFighter; // true
  moneybagsMichael instanceof Doggo; // true
  moneybagsMichael instanceof Object; // true

  bobBuilder instanceof DoggoFighter; // false
  bobBuilder instanceof Doggo; // true
}

// Class Syntax

// Demo: Doggos go to Class

class Doggo {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  bark() {
    return `${this.name} barked "Bork bork!"`;
  }
}

/*
function Doggo(name, age) {
  this.name = name;
  this.age = age;
}

Doggo.prototype.bark = function() {
  return `${this.name} barked "Bork bork!"`;
};
*/

class DoggoFighter extends Doggo {
  constructor(name, age, specialAbility) {
    super(name, age);
    // when using `super` in a constructor, you
    // must use it before mutating `this`
    this.specialAbility = specialAbility;
  }

  fight(doggo) {
    return `${[doggo.name, this.name][Math.floor(Math.random() * 2)]} won!`;
  }
}

const bobBuilder = new Doggo("Bob Builder", 10);
const moneybagsMichael = new DoggoFighter(
  "Moneybags Michael",
  14,
  "Making it Rain"
);
