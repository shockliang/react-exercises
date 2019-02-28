// JSX
var template = (
  <div>
    <h1>This is JSX from app.js!!!!</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var template2 = (
  <div>
    <h1>Someone's name</h1>
    <p>Age: 48</p>
    <p>Taiwan</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
