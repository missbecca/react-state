import { useState } from "react";

const Form = () => {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }

  function sub() {
    setCount(count - 1);
  }

  function zero() {
    setCount(0);
  }

  return (
    <div>
      <p>{count}</p>

      <button onClick={add}>add</button>
      <button onClick={sub}>sub</button>
      <button onClick={zero}>reset</button>
    </div>
  );
};

export default Form;
