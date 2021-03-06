class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinueOne = this.handleMinueOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    const count = parseInt(localStorage.getItem("count"), 10);
    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  }

  componentDidUpdate(prveProps, prveState) {
    if (prveState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }

  handleAddOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinueOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinueOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

// Counter.defaultProps = {
//   count: 0
// };

ReactDOM.render(<Counter />, document.getElementById("app"));
