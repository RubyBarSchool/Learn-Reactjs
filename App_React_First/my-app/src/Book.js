import React from "react";

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

export default Book;
