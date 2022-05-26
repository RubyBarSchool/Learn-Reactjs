import React, { useState } from "react";
const UseStateObject = () => {
  const [man, setMan] = useState({
    name: "TruongTV14",
    age: 22,
    message: "random message",
  });

  const changeMessage = () => {
    setMan({ ...man, message: "Hello World" });
  };
  const { name, age, message } = man;
  return (
    <>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{message}</h1>
      <button type="button" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
