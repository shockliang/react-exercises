"use strict";

var app = {
  title: "Indecision App",
  subTitle: "First react app"
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
  React.createElement(
    "p",
    null,
    app.subTitle
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

var user = {
  name: "Shock Liang",
  age: "37",
  location: "Taiwan"
};
var userName = "Shock";
var userAge = 37;
var userLocation = "Taiwan";

var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name.toUpperCase()
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.location
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
