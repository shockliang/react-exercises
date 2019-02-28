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

var user = {
  name: "Shock Liang",
  age: "35",
  location: "Taiwan"
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
}

var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name.toUpperCase() : "Anonymous"
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
