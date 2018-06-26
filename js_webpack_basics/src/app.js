import "./styles/main.css";
import "./hola";
import "./yo";

// Importing images will only work if
// "file-loader" installed and setup.
// When importing an image by default,
// you will receive the final path
// of the image for use in your HTML
// or React code or DOM manipulation.
import bearImg from "./images/bear.png";

console.log("Hello, Universe!");
console.log(bearImg);

document.addEventListener("DOMContentLoaded", () => {
  const bear = document.createElement("img");
  bear.src = bearImg;

  document.body.append(bear);
});
