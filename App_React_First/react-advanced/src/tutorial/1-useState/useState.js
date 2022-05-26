import React, { useState } from "react";

const UseStateDemo = () => {
  const [text, setText] = useState("random title");

  const handleClick = () => {
    if (text === "random title") {
      setText("hello title");
    } else {
      setText("random title");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default UseStateDemo;
