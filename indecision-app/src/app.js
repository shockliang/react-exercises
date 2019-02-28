var app = {
  title: "Indecision App",
  subTitle: "First react app"
};

// JSX
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subTitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: "Shock Liang",
  age: "37",
  location: "Taiwan"
};
var userName = "Shock";
var userAge = 37;
var userLocation = "Taiwan";

var template2 = (
  <div>
    <h1>{user.name.toUpperCase()}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
