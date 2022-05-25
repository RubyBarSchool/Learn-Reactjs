import React from "react";
import ReactDOM from "react-dom";

const Book = (props) => {
  console.log(props);
  return (
    <article>
      <h1>{props.title}</h1>
      <h4>{props.content}</h4>
      <h4>{props.children}</h4>
    </article>
  );
};

function BookList() {
  return (
    <div>
      <Book title="Title" content="content">
        Children content
      </Book>
      <Book />
    </div>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
