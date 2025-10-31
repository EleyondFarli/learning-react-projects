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
        <input
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          type="range"
          min="0"
          max="10"
        />
        <label>Step: {step}</label>
      </div>
      <div style={{ display: "flex" }}>
        <button onClick={() => setCount(count - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => {
            setCount(Number(e.target.value));
          }}
        />
        <button onClick={() => setCount(count + step)}>+</button>
      </div>
      <div>
        {count === 0 ? "Today is " : count + " days from today is "}{" "}
        {resultDate.toDateString()}
      </div>
      {count !== 0 && (
        <button
          onClick={() => {
            setCount(0);
            setStep(1);
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default App;
