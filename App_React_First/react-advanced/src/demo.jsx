import React, { useState } from "react";
import { data } from "../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removePeople = (data) => {
    console.log(data);
    let peopleNew = people.filter((people) => people.id !== data);
    setPeople(peopleNew);
  };
  return (
    <React.Fragment>
      {people.map((people) => {
        const { id, name, age } = people;
        console.log(people);
        return (
          <div key={id}>
            <h1>
              {name} {age}
            </h1>
            <button type="button" onClick={() => removePeople(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button type="button" onClick={() => setPeople([])}>
        remove all
      </button>
      <button
        type="button"
        onClick={() => {
          setPeople([]);
          setPeople(data);
        }}
      >
        reset
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
