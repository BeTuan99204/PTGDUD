// src/components/CounterUseReducer.jsx
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function CounterUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-md w-60 mx-auto mt-10">
      <h2 className="text-xl font-semibold">useReducer Counter</h2>
      <p className="text-3xl font-bold">{state.count}</p>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          -
        </button>
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          +
        </button>
      </div>
    </div>
  );
}
