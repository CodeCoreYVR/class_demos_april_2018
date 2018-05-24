// JS: jQuery

// Selecting nodes with $() function

$(".black.square");
// returns JQuery Collection of all nodes that have the classes
// black & square.

// Exercise: Try Selecting

// 1. Select the 2nd button
$("button:nth-of-type(2)");

// 2. Select all anchor tags inside li tags
$("li a");

// 3. Count the number of blue circles
$(".blue.circle").length;

// Demo: Attributes, Classes & Removal

// 1.
$("a").attr("href", "http://nyan.cat");
// When using a method that writes changes with jQuery collections,
// the change will apply to all nodes in the collection at once.

// 2.
// `removeClass` and `addClass` both write to the node meaning
// that they will change all nodes in the collection at once.
$(".blue")
  .removeClass("blue")
  .addClass("red");
// jQuery methods (almost) always return a jQuery collection
// allowing us to chain jQuery method after jQuery method.

// EXERCISE: Practice

// Set the “class” attribute of all anchors to “highlight” with attr method.
$("a").attr("class", "highlight");

// Replace all “circle” classes with the “diamond” class.
$(".circle")
  .removeClass("circle")
  .addClass("diamond");

// Remove all shapes in the green & purple container.
$("#green-container .shape, #purple-container .shape").remove();
$("#green-container, #purple-container")
  .children(".shape")
  .remove();
$("#green-container, #purple-container")
  .find(".shape")
  .remove();

// Works but gets including non-shape
$("#green-container, #purple-container").empty();

// Demo: html, children and parent

// Get "html" of the reset button
$("#reset").html();

// Try to get the "html" of all anchors
$("a").html();
// 👆 will only get the html of the first anchor in the
// jQuery collection
$("a").map((index, node) => $(node).html());
// To get them all, we need to iterate over nodes.
// Be careful when using iteration high-order functions
// in jQuery, because the argument of their callbacks are reversed
// compared to JavaScript's own.

// When iterating, the nodes that you get are plain JavaScript.
// You can't use jQuery methods on them. You must first call
// the $ function on the nodes to wrap them in a jQuery collection.

// Change the "reset" button to read "Launch Doggos!"
$("#reset").html("Launch Doggos!");

// Practice

// 1. Replace the contents of every "td" with "yass"
$("td").html("yass");

// 2. Select parents of all td tags
$("td").parents(); // Gets all ancestors!
$("td").parent(); // Only gets the immediate parent nodes

// Demo: Creating nodes, append & prepend

// Create a "small blue diamond" with $.
$(`<div class="small blue diamond shape"></div>`);

// Append a "small blue diamond" to all containers.
$(".container").append($(`<div class="small blue diamond shape"></div>`));

// Prepend a new link, "http://nyan.cat", to the list of links.
$("ul").prepend($(`<li><a href="http://nyan.cat">Nyan Cat</a></li>`));

// EXERCISE: Practice

// Create a div with the “container” class.
$(`<div class="container"></div>`);

// Prepend it to the first section tag in the body.
$("body section:first").prepend($(`<div class="container"></div>`));

// Append a “small black circle” to the container.
$("body section:first").prepend(
  $(`<div class="container"></div>`).append(
    $(`<div class="small black circle shape"></div>`)
  )
);

// When writing JavaScript that operates on the DOM, you must
// run that JavaScript only only once the nodes in question are loaded.
// Typically, we load JavaScript with the <script> tag in the <head>
// of our documents. This means the JavaScript will execute before
// the browser had time to parse the rest of the DOM.
// To make sure that your JavaScript only runs once the browser
// has finished parsing the entire document, use the "DOMContentLoaded"
// event on the `document`.

document.addEventListener("DOMContentLoaded", () => {
  // Demo: Events with on
  // When your mouse enters any blue circle, log “Blue Circle: Go away!”
  // to the console.

  $(".blue.circle").on("mouseenter", event => {
    console.log("Blue Cirle: Go away!");
  });

  // When your mouse leaves any blue circle, log “Blue Circle: Goodbye!” to the console.
  $(".blue.circle").on("mouseleave", event => {
    console.log("Blue Cirle: Come back!");
  });

  // When “button 1” is clicked, remove all shapes.
  $("#button-1").on("click", event => {
    $(".shape").remove();
  });
});

$(() => {
  // Exercise: Practice
  // When “button 2” is clicked, disable “button 2”. (set the “disabled” attribute to true)
  $("#button-2").on("click", event => {
    const { currentTarget } = event;
    // You can still use currentTarget inside a listener passed to
    // to on, but don't forget wrap in a Jquery Collection.
    $(currentTarget).attr("disabled", "disabled");
  });

  // When “button 3” is clicked, set the button message
  // to “Button 3 was clicked”
  $("#button-3").on("click", e => {
    $("#button-message").html("Button 3 was clicked!");
  });

  // When your mouse enters any “tr”, add “highlight” class.
  $("tr").on("mouseenter", e => {
    const { currentTarget } = e;
    $(currentTarget).addClass("highlight");
  });
  // When your mouse leaves any “tr”, remove the “highlight” class.
  $("tr").on("mouseleave", e => {
    const { currentTarget } = e;
    $(currentTarget).removeClass("highlight");
  });
});
