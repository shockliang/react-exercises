class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  
  handleToggleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide detail" : "Show detail"}
        </button>
        {this.state.visibility && (
          <div>
            <p>This is detail!</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   renderTemplate();
// };

// const renderTemplate = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? "Hide detail" : "Show detail"}
//       </button>
//       {visibility && (
//         <div>
//           <p>This is detail!</p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// const appRoot = document.getElementById("app");
// renderTemplate();
