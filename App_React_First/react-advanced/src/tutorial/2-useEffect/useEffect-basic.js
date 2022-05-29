import React, { useEffect, useState } from "react";
// by default runs after every re-render

/**
 * useEffect(callBack,dependencies)
 *
 * MOUNTING
 * - rendering
 * - run useEffect
 *
 * UPDATING
 * - rendering
 * - run useEffect cleanup neu dependencies thay doi
 * - run useEffect neu dependencies thay doi
 *
 * UNMOUNTING
 * - run useEffect cleanup
 *
 * dependencies
 * none-luon chay
 * [] chi chay 1 lan
 * [filters] chi chay khi filters thay doi
 */

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
