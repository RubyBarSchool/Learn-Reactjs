import React, { useState } from "react";

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);

  const resetCounter = () => {
    setCounter(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      setCounter((prevState) => {
        return prevState + 1;
      });
    }, 1000);
  };

  return (
    <>
      <h1>Regular counter</h1>
      <h1>{counter}</h1>
      <button type="button" onClick={() => setCounter(counter - 1)}>
        Decrease
      </button>
      <button type="button" onClick={resetCounter}>
        Reset
      </button>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Increase
      </button>
      <h1>More Complex counter</h1>
      <h1>{counter}</h1>
      <button type="button" onClick={complexIncrease}>
        Increase
      </button>
    </>
  );
};

export default UseStateCounter;
