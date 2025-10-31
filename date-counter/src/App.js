import { useState } from "react";
import React from "react";
import "./App.css";

function App() {
  return <Counter />;
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const today = new Date();
  const resultDate = new Date();
  resultDate.setDate(today.getDate() + count);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex" }}>
        <button onClick={() => setStep(step - 1)}>-</button>
        <div>Step: {step}</div>
        <button onClick={() => setStep(step + 1)}>+</button>
      </div>
      <div style={{ display: "flex" }}>
        <button onClick={() => setCount(count - step)}>-</button>
        <div>Count: {count}</div>
        <button onClick={() => setCount(count + step)}>+</button>
      </div>
      <div>Today is {resultDate.toDateString()}</div>
    </div>
  );
}

export default App;
