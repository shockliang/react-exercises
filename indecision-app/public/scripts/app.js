"use strict";

var app = {
  title: "Indecision App",
  subTitle: "First react app",
  // options: ["One", "Two"]
  options: []
};

// JSX
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subTitle && React.createElement(
    "p",
    null,
    app.subTitle
  ),
  app.options && app.options.length > 0 && React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);

var count = 0;

var addOne = function addOne() {
  return count++;
};
var minusOne = function minusOne() {
  return count += count > 1 ? -1 : 0;
};
var reset = function reset() {
  return count = 0;
};

var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count: ",
    count
  ),
  React.createElement(
    "button",
    { onClick: addOne },
    "+1"
  ),
  React.createElement(
    "button",
    { onClick: minusOne },
    "-1"
  ),
  React.createElement(
    "button",
    { onClick: reset },
    "reset"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
