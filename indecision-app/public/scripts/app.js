"use strict";

// JSX
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "This is JSX from app.js!!!!"
  ),
  React.createElement(
    "p",
    null,
    "This is some info"
  ),
  React.createElement(
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

var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Someone's name"
  ),
  React.createElement(
    "p",
    null,
    "Age: 48"
  ),
  React.createElement(
    "p",
    null,
    "Taiwan"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
