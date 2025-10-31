import { useState } from "react";

function MyButton({ count, onClick }) {
  return (
    <>
      <button onClick={onClick}>I am a button!</button>
      <div>Clicked {count} times</div>
    </>
  );
}

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

export default function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));
  return (
    <>
      <div>
        <h1>Welcome to my app!</h1>
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
      </div>
      <ul>{listItems}</ul>
    </>
  );
}
