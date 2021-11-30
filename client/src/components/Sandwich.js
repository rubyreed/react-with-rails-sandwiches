import React from "react";

const Sandwich = (props) => {
  return (
    <div style = {styles.info}>
      <p>id: {props.id}</p>
      <p>name: {props.name}</p>
      <p>price: {props.price}</p>
      <p>description: {props.description}</p>
    </div>
  );
};


const styles = {
  info: {
    border: "3px solid red",
    margin: "5px",
    padding: "5px"
  }
}

export default Sandwich;