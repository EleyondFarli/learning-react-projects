import { useState } from "react";

export default function App() {
  const [billPrice, setBillPrice] = useState(0);
  const [myTipPercentage, setMyTipPercentage] = useState(0);
  const [friendTipPercentage, setFriendTipPercentage] = useState(0);
  const tipPrice = Number(
    ((billPrice * (myTipPercentage + friendTipPercentage)) / 2).toFixed(2)
  );
  const isPriceVisible = billPrice !== 0;

  function handleReset() {
    setBillPrice(0);
    setMyTipPercentage(0);
    setFriendTipPercentage(0);
  }

  return (
    <>
      <BillInput billPrice={billPrice} onPriceChange={setBillPrice} />
      <ServiceInput
        percentage={myTipPercentage}
        onTipChange={setMyTipPercentage}
      >
        <span>How did you like the service?&nbsp;</span>
      </ServiceInput>
      <ServiceInput
        percentage={friendTipPercentage}
        onTipChange={setFriendTipPercentage}
      >
        <span>How did your friend like the service?&nbsp;</span>
      </ServiceInput>
      {isPriceVisible && <TotalSum billPrice={billPrice} tipPrice={tipPrice} />}
      {isPriceVisible && <ResetButton onReset={handleReset} />}
    </>
  );
}

function BillInput({ billPrice, onPriceChange }) {
  return (
    <>
      <span>How much was the bill?&nbsp;</span>
      <input
        type="text"
        placeholder="Bill Value"
        value={Number(billPrice)}
        onChange={(e) => onPriceChange(Number(e.target.value))}
      />
    </>
  );
}

function ServiceInput({ percentage, onTipChange, children }) {
  return (
    <div>
      {children}
      <select
        id="quality"
        value={percentage}
        onChange={(e) => onTipChange(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={0.05}>It was okay (5%)</option>
        <option value={0.1}>It was good (10%)</option>
        <option value={0.2}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function TotalSum({ billPrice, tipPrice }) {
  return (
    <h3>
      You pay ${billPrice + tipPrice} (${billPrice} + ${tipPrice} tip)
    </h3>
  );
}

function ResetButton({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
