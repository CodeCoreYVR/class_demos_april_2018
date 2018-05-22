// JS: Document Object Model

// In the browser, the `document` is the root object of the DOM.
// Its decendent nodes represent all tags loaded by the html document.
// By default, Chrome will display nodes as HTML visually, but
// they're in fact JavaScript objects. To force them to display as
// objects, use the `console.dir()` method.
// Example: `console.dir(document)`

// SELECTING NODES

// <node> can be replaced with any node object such as the `document`
// or any node selected with `querySelector` and friends.

// <node>.querySelector(<css-query>)
// Use querySelector to find the first node that matches the
// <css-query> argument. These query are exactly the same CSS selectors.
// Examples:

const toxicTim = document.querySelector("#toxic-tim");
const teamSalmon = document.querySelector(".team.salmon");
const teamTeal = document.querySelector(".team.teal");
// Can be used with any node. If so, will only search descendents
// of that node.
const firstDoggoOfTeamTeal = teamTeal.querySelector(".doggo");

// <node>.querySelectorAll(<css-query>)
// Use querySelectorAll to find all nodes that matches the
// <css-query> argument.
// Examples:

const allDoggos = document.querySelectorAll(".doggo");
const allTeams = document.querySelectorAll(".team");
// Can be used with any node.
const allTeamTealDoggos = teamTeal.querySelectorAll(".doggo");
// const allTeamTealDoggos = document.querySelectorAll(".team.teal .doggo");

// querySelectorAll returns a NodeList which is a similar data structure
// to an array. You can iterate over it using .forEach() and for .. of loops.

/*
for (let node of allDoggos) {
  console.log(node.id);
}
*/

// If you want to any array method with it, transform into an
// array with Array.from().

Array.from(allDoggos).map(node => node.id);

// NAVIGATION NODES

// <node>.nextElementSibling & <node>.previousElementSibling
// Use the properties to get the next sibling or the previous
// of <node>. A sibling is a node that shares the same parent node
// with another node.

const bumbleBertha = toxicTim.nextElementSibling;

// <node>.parentElement
// The property above gets the parent node of <node>.
teamSalmon === toxicTim.parentElement.parentElement;

// <node>.children
// Gets all children nodes of <node> in an HTMLCollection.
// (an array-like object containing nodes)
teamSalmon.children;
teamSalmon.children[1].children;

// <node>.matches(<css-query>)
// Takes a CSS selector string as an argument and returns true if
// <node> matches that css query otherwise it returns false.
toxicTim.matches("main"); // false
toxicTim.matches("div"); // true
toxicTim.matches("#toxic-tim"); // true

// <node>.closest(<css-query>)
// Takes CSS selector string and searches ancestor
// (including <node>) until if finds the first matching ancestor
// node then returns it. Otherwise, it returns null.

toxicTim.closest(".team"); // team salmon node
toxicTim.closest(".teams"); // the teams div
toxicTim.closest("div"); // toxic tim
toxicTim.closest("nav"); // `null`

// MANIPULATION

// Modifying inline styles

// Nodes have a style property that holds an object which
// contains all inline styles (HTML attribute style).
// When setting a property through this object, you must name
// it using camelCase.

/*
toxicTim.style.border = "medium solid lime";
toxicTim.style.borderRadius = "10px";
toxicTim.style.transform = "rotate(45deg)";
*/

// Sometimes its necessary to read the actual computed value of
// a CSS property on a node. To do this, use the global
// function `getComputedStyle`. This will return a CSSStyleDeclaration
// object which contains all final CSS properties and their values
// for that node.

getComputedStyle(toxicTim);
getComputedStyle(toxicTim).backgroundColor;
getComputedStyle(toxicTim).fontFamily;

// CHANGING AND READING CONTENTS OF A NODE

// <node>.innerHTML
// This property contains all the HTML as a string inside a of <node>.
toxicTim.innerHTML; // returns "<h1>Toxic Tim</h1>"

// You can also use it to replace the contents of a <node>
toxicTim.innerHTML = "<h1>Toxic Tim 🐶</h1>";

// <node>.outerHTML
// This property is like .innerHTML, but also includes <node> itself.

toxicTim.outerHTML;
// returns "<div id="toxic-tim" class="doggo fighter"><h1>Toxic Tim 🐶</h1></div>"

// You can use it to replace <node> with other HTML.
// bumbleBertha.outerHTML = "<h1>Stuff and Things</h1>"

// READING AND WRITING HTML ATTRIBUTES

// <node>.getAttribute(<attribute-name>)
// This methods returns the value of <node>'s html attribute
// (custom or not) by its <attribute-name>.

toxicTim.getAttribute("id"); // "toxic-tim"
toxicTim.getAttribute("class"); // "doggo fighter"
document.querySelector("form").getAttribute("action"); // "/"

// <node>.setAttribute(<attribute-name>, <attribute-value>)
// Use this method to add or update any html attribute
// on <node>.

toxicTim.setAttribute("data-confirm", "true");
toxicTim.setAttribute("data-confirm", "false");
toxicTim.setAttribute("href", "www.google.com");

// MANIPULATING CLASSES

// <node>.classList.add(<class-name>, <class-name>, ...)
// To add classes, use these recommended methods. You can
// add any number of classes in as many arguments as you want.
toxicTim.classList.add("worker");
toxicTim.classList.add("cancer", "shocked");

// <node>.classList.remove(<class-name>, <class-name>, ...)
toxicTim.classList.remove("shocked");
toxicTim.classList.remove("cancer", "fighter");

// <node>.classList.toggle(<class-name>)
toxicTim.classList.toggle("fighter");

// <node>.classList.contains(<class-name>)
// Use this method to test if <class-name> is a class of <node>.
toxicTim.classList.contains("doggo"); // true
toxicTim.classList.contains("rich"); // false

// REMOVING NODES

// <node>.remove()
// Removes <node> from the DOM.
/*
toxicTim.remove();
allDoggos.forEach(node => node.remove());
*/

/*
// Exercise: Vandalise The Arena
// 1. Change the color of all teams to fuchsia

document.querySelectorAll(".team").forEach(node => {
  node.style.backgroundColor = "fuchsia";
});

// 2. Rename all doggos to Rob The Slob

for (let node of document.querySelectorAll(".doggo.fighter")) {
  node.innerHTML = "<h1>Rob The Slob</h1>";
}

// 3. Change all doggo pictures to that of a cat from the internet

document.querySelectorAll(".doggo.fighter").forEach(node => {
  const catPic = "https://i.imgur.com/IUI9j2j.gif";
  node.style.backgroundImage = `url(${catPic})`;
});
*/

// CREATING NODES

// document.createElement(<tag-name>)
// Creates an empty node with tag <tag-name> that is not
// yet placed on the page.

const drillBitDarel = document.createElement("div");
drillBitDarel.setAttribute("id", "drill-bit-darel");
drillBitDarel.classList.add("doggo", "fighter");
drillBitDarel.style.backgroundImage = `url(images/drill_bit_darel.jpg)`;

// <parent-node>.append(<child-node>)
// Use this method to add <child-node> as the last child of
// <parent-node>.

const h1 = document.createElement("h1");
h1.innerText = "Drill Bit Darel";
// This makes h1 a child node of drill bit darel's div node.
drillBitDarel.append(h1);

// <parent-node>.prepend(<child-node>)
// Use this method to add <child-node> as the first child of <parent-node>.

// If you prepend or append a node to a node that is already in
// the DOM, the node become visible.
teamTeal.querySelector(".roster").prepend(drillBitDarel);

// When usng any method to place nodes (i.e. prepend, append, insertBefore),
// the nodes are moved and not copied. To create a copy, use the following:

// <node>.cloneNode()
// This method will create a duplicate node of <node>. By default,
// it only duplicates the node itself without descendents.
// To also clone descendents, pass `true` as argument to `cloneNode()`.

teamSalmon.querySelector(".roster").prepend(drillBitDarel.cloneNode(true));
teamSalmon.querySelector(".roster").append(drillBitDarel.cloneNode(true));
