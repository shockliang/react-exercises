var app = {
  title: "Indecision App",
  subTitle: "First react app",
  // options: ["One", "Two"]
  options: []
};

// JSX
var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    {app.options && app.options.length > 0 && (
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
    )}
  </div>
);

var user = {
  name: "Shock Liang",
  age: "35",
  location: "Taiwan"
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

var template2 = (
  <div>
    <h1>{user.name ? user.name.toUpperCase() : "Anonymous"}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
