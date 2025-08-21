import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    if (count === 0) return 0 ;
    setCount(count - 1);
  };

  return (
    <div>
      <h1>COUNTER TASK</h1>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <button onClick={decreaseCount}>-</button>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};
