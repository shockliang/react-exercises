let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  renderTemplate();
};

const renderTemplate = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? "Hide detail" : "Show detail"}
      </button>
      {visibility && (
        <div>
          <p>This is detail!</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");
renderTemplate();
