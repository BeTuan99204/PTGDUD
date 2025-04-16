// App.jsx
import React from "react";
import CounterUseReducer from "./components/CounterUseReducer";
import CounterReduxToolkit from "./components/CounterReduxToolkit";
import CounterReduxNo from "./components/CounterRedux";
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <CounterUseReducer />
      <CounterReduxToolkit />
      <CounterReduxNo />
    </div>
  );
}
