import React from "react";

const Sandwich = (props) => {
  return (
    <div>
      <p>id: {props.id}</p>
      <p>name: {props.name}</p>
      <p>price: {props.price}</p>
      <p>description: {props.description}</p>
    </div>
  );
};

export default Sandwich;