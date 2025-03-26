import React from "react";
import CounterUseState from "./components/CounterUseState";
import CounterUseReducer from "./components/CounterUseReducer";
import FetchData from "./components/FetchData";
import PerformanceDemo from "./components/PerformanceDemo";
import useCounter from "./components/useCounter";

const App = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <CounterUseState />
      <CounterUseReducer />
      <FetchData />
      <PerformanceDemo number={count} />
      <h2>Custom Hook: useCounter</h2>
      <p>{count}</p>
      <button onClick={increment}>Tăng</button>
      <button onClick={decrement}>Giảm</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default App;
