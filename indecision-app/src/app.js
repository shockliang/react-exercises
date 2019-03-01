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

const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count += count > 0 ? -1 : 0;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
  const template2 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(template2, appRoot);
};

renderCounterApp();
