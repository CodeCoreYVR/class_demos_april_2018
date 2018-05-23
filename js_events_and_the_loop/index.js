// JS: EVENTS & THE LOOP

const toxicTim = document.querySelector("#toxic-tim");

/*
toxicTim.addEventListener("click", () => {
  console.log("Toxic Tim was clicked!");
});

document.addEventListener("click", () => {
  console.log("Document was clicked!");
});
*/

// <node>.addEventListener(<event-name>, <listener-callback>)
// This method allows to react events that occur in the browser
// whether triggered by a user or another source.

// Its first argument is a string that refers to an event name.
// The names are significant and correspond to hard-coded
// events. Here's a full list of event names:
// https://developer.mozilla.org/en-US/docs/Web/Events

// Its second argument is a callback named "listener" that is called
// when the event is triggered.

// Demo: Clicks, Events & Properties

const teams = document.querySelector(".teams");

/*
teams.addEventListener("click", function(event) {
  console.log("===================");
  console.log("type:", event.type);
  console.log("target:", event.target);
  // The .target is the node that originally triggered the event.
  // In the case of the "click" event, it's the nade that
  // was clicked.
  console.log("currentTarget:", event.currentTarget);
  // The .currentTarget is the node that has the .addEventListener
  // method (or the node that is listening for the event.)
  console.log("this:", this);
  // `this` inside the listener (if not written as an arrow function)
  // will be equal to event.currentTarget. Avoid using `this`
  // unless its the covention for a codebase. For example,
  // an old JavaScript front-end written with jQuery.

  console.log("client{X, Y}:", event.clientX, event.clientY);
  console.log("page{X, Y}:", event.pageX, event.pageY);
  console.log("offset{X, Y}:", event.offsetX, event.offsetY);

  // WARNING!
  // In Chrome & Internet Explorer, event (window.event) is a global
  // variable. If using the name `event` instead of the name of the
  // argument you wrote for the listener, the `event` will still work.
  // Please do not depend on this! This is bad!
});
*/

// Exercise: Last in Queue

/*
document.querySelectorAll(".team .doggo").forEach(node => {
  node.addEventListener("click", event => {
    const currentTarget = event.currentTarget;

    currentTarget.closest(".roster").append(currentTarget);
  });
});
*/

// MOUSE EVENTS

document.querySelectorAll(".team .doggo").forEach(node => {
  node.addEventListener("dblclick", event => {
    const { currentTarget } = event;
    // This is called destructuring. It creates a variable
    // from a property of the object on the right-hand side of
    // =.
    // Shortcut for the following:
    // `const currentTarget = event.currentTarget;`

    currentTarget.classList.toggle("inverted");
  });

  node.addEventListener("mousedown", event => {
    const { currentTarget } = event;
    currentTarget.classList.add("flipped");
  });

  node.addEventListener("mouseup", event => {
    const { currentTarget } = event;
    currentTarget.classList.remove("flipped");
  });

  // Exercise: Crouching Mouse Hidden Doggo

  node.addEventListener("mouseenter", event => {
    const { currentTarget } = event;
    currentTarget.classList.add("greyed");
  });

  node.addEventListener("mouseleave", event => {
    const { currentTarget } = event;
    currentTarget.classList.remove("greyed");
  });
});

// Form & Input Events
const random = n => Math.ceil(Math.random() * n);
const keyboardSound = () =>
  new Audio(`sounds/vintage-keyboard-${random(5)}.wav`);

document.querySelectorAll("#application-form input").forEach(node => {
  node.addEventListener("input", event => {
    const { currentTarget } = event;
    // console.log(currentTarget.value);
    // console.log(currentTarget.getAttribute("value"));
    keyboardSound().play();
  });
});

document
  .querySelector("#application-form")
  .addEventListener("submit", event => {
    // Use .preventDefault() method on the event object
    // to prevent it from triggering any default behaviour.
    // This stops anchor tags from telling the browser to
    // make a get request somewhere and it also prevents forms
    // doing the same.
    event.preventDefault();
    const { currentTarget } = event;

    // To get all input values from a form, use the FormData constructor
    // with a form node as its argument.
    const formData = new FormData(currentTarget);

    // To the value of an input, use the get method on the FormData
    // object with the "name" attribute of the input.
    formData.get("name");
    formData.get("picture-url");

    // To list all of the data inside FromData objects, use the
    // .entries() method. You can use with a for..of loop or with
    // Array.from() to create an array from it.

    const nameValuePairs = Array.from(formData.entries());
    // console.log(nameValuePairs);
    // console.log(event);

    const blankDoggo = document.querySelector(".doggo.blank");
    blankDoggo.style.backgroundImage = `url(${formData.get("picture-url")})`;
    blankDoggo.innerHTML = `<h1>${formData.get("name")}</h1>`;
  });

// Keyboard Events

// Demo: Shortcut to Nyancat

document.addEventListener("keydown", event => {
  const { keyCode, key, altKey, ctrlKey, shiftKey, metaKey } = event;
  // console.log(
  //   "key:",
  //   key,
  //   "keyCode:",
  //   keyCode,
  //   "altKey:",
  //   altKey,
  //   "ctrlKey:",
  //   ctrlKey,
  //   "shiftKey:",
  //   shiftKey,
  //   "metaKey:",
  //   metaKey
  // );

  if (keyCode === 78 && altKey && ctrlKey) {
    console.log("Going to NyanCat!");
    window.location.href = "http://nyan.cat";
  }
});

// Exercise: Shortcuts of the Ninja

/*
let keyBuffer = "";

document.addEventListener("keydown", event => {
  const { key } = event;

  if (key.length < 2) {
    keyBuffer = (keyBuffer + key).slice(-5);
  }

  if (keyBuffer.toLowerCase() === "panic") {
    location.href = "http://hackertyper.net";
  }

  // console.log(keyBuffer);
});
*/

// As closure

const panicHandler = () => {
  let keyBuffer = "";

  return event => {
    const { key } = event;

    if (key.length < 2) {
      keyBuffer = (keyBuffer + key).slice(-5);
    }

    if (keyBuffer.toLowerCase() === "panic") {
      location.href = "http://hackertyper.net";
    }
  };
};

document.addEventListener("keydown", panicHandler());
