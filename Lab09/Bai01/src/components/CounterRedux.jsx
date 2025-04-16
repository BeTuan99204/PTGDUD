// src/components/CounterReduxNo.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterReducer";

export default function CounterRedux() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-md w-60 mx-auto mt-10">
      <h2 className="text-xl font-semibold">Redux (No Toolkit) Counter</h2>
      <p className="text-3xl font-bold">{count}</p>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          -
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          +
        </button>
      </div>
    </div>
  );
}
