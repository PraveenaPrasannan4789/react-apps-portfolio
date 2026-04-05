import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div
      style={{
        backgroundColor: "aliceblue",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>Counter {counter} </h1>
      <button
        style={{ marginRight: "10px" }}
        onClick={() => setCounter(counter + 1)}
      >
        Increment
      </button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
