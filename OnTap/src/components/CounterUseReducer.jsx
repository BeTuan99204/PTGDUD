//cau2
import React, { useReducer } from "react";
import "./counterUseReducer.css";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE": return state + 1;
    case "DECREASE": return state - 1;
    case "RESET": return 0;
    default: return state;
  }
};

const CounterUseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Counter using useReducer</h2>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "INCREASE" })}>Tăng</button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>Giảm</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default CounterUseReducer;
