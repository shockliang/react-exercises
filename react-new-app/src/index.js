import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// bad way
// const App = props => {
//   const [state, setState] = useState({
//     count: props.count,
//     text: ""
//   });

//   return (
//     <div>
//       <p>
//         The current {state.text || "count"} is {state.count}
//       </p>
//       <button onClick={() => setState({ ...state, count: state.count + 1 })}>
//         +1
//       </button>
//       <button onClick={() => setState({ ...state, count: state.count - 1 })}>
//         -1
//       </button>
//       <button onClick={() => setState({ ...state, count: props.count })}>
//         reset
//       </button>
//       <input
//         value={state.text}
//         onChange={e => setState({ ...state, text: e.target.value })}
//       />
//     </div>
//   );
// };

// Good way
const App = props => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState("");

  return (
    <div>
      <p>
        The current {text || "count"} is {count}
      </p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(props.count)}>reset</button>
      <input value={text} onChange={e => setText(e.target.value)} />
    </div>
  );
};

ReactDOM.render(<App count={10} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
