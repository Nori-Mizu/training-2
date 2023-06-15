import React from "react";
import { useState, useEffect } from "react";

function Main() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log("カウント:", count);
  };
  useEffect(() => {
    console.log("カウント:", count);
  }, [count]);
  return (
    <>
      <button onClick={handleClick}>+</button>
      <p> {count}</p>
    </>
  );
}

export default Main;
