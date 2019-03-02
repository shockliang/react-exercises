const app = {
  title: "Indecision App",
  subTitle: "First react app",
  // options: ["One", "Two"]
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderTemplate();
  }
};

const onRemoveAll = () => {
  app.options = [];
  renderTemplate();
};

// JSX
const renderTemplate = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      {app.options && app.options.length > 0
        ? "Here are your options"
        : "No options"}
      <p>option length:{app.options.length}</p>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");
renderTemplate();
