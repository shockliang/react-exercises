const app = {
  title: "Indecision App",
  subTitle: "First react app",
  // options: ["One", "Two"]
  options: []
};

// JSX
const template = (
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

let count = 0;

const addOne = () => count++;
const minusOne = () => (count += count > 1 ? -1 : 0);
const reset = () => count = 0;

const template2 = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
