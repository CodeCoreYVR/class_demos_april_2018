import React from "react";
import ReactDOM from "react-dom";
import bearPng from "./images/bear.png";

const HelloWorld = props => (
  <div>
    <img src={bearPng} />
    <h1>Hello, World!</h1>
  </div>
);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <HelloWorld />,
    document.body.appendChild(document.createElement("div"))
  );
});
