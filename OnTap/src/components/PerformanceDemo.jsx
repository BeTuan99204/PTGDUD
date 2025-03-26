//cau4
import React, { useMemo, useCallback } from "react";
import "./performanceDemo.css";

const PerformanceDemo = React.memo(({ number }) => {
  const squared = useMemo(() => number * number, [number]);

  const logNumber = useCallback(() => {
    console.log("Current number: ", number);
  }, [number]);

  return (
    <div>
      <h2>Performance Optimization</h2>
      <p>Square: {squared}</p>
      <button onClick={logNumber}>Log Number</button>
    </div>
  );
});

export default PerformanceDemo;
