import React, { useEffect, useState } from "react";
// by default runs after every re-render
const UseEffectBasic = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value > 1) {
      document.title = `New message (${value})`;
    }
    console.log("call useEffect");
  });
  console.log("render component");
  return (
    <>
      <h1>UseEffect Basic Demo</h1>
      <h1>{value}</h1>
      <button type="button" onClick={() => setValue(value + 1)}>
        Increase
      </button>
    </>
  );
};

export default UseEffectBasic;
