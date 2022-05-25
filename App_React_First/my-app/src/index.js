import React from "react";
import ReactDOM from "react-dom";

const Books = [
  {
    title: " Title book",
    content: "Content Book",
    price: 10000,
  },
  {
    title: " Title book",
    content: "Content Book",
    price: 10000,
  },
  {
    title: " Title book",
    content: "Content Book",
    price: 10000,
  },
  {
    title: " Title book",
    content: "Content Book",
    price: 10000,
  },
  {
    title: " Title book",
    content: "Content Book",
    price: 10000,
  },
  {
    title: " Title book",
    content: "Content Book",
    price: 10000,
  },
];

const Book = (props) => {
  const { title, content, children } = props.props;
  console.log(props);
  return (
    <article>
      <h1>{title}</h1>
      <h4>{content}</h4>
      <h4>{children}</h4>
    </article>
  );
};

function BookList() {
  return (
    <div>
      {Books.map((book) => {
        return <Book props={book} />;
      })}
    </div>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
