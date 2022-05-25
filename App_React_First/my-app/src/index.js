import React from "react";
import ReactDOM from "react-dom";

import Book from "./Book";
import Books from "./Books";

function BookList() {
  return (
    <div>
      {Books.map((book, index) => {
        return <Book key={index} props={book} />;
      })}
    </div>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
