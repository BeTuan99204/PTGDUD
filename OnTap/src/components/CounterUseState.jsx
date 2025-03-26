//cau1

import React, { useState } from "react";
import "./counterUseState.css";

const CounterUseState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter using useState</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <button onClick={() => setCount(count - 1)}>Giảm</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default CounterUseState;
