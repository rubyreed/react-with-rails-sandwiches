import React, {useState} from "react";
import SandwichForm from "./SandwichForm";

const Sandwich = (props) => {
  const [showForm, setShowForm] = useState(false);
  const {id, name, price, description, deleteSandwich, updateSandwich} = props

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div style = {styles.info}>
      <p>Sandwich #: {id}</p>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
      <button onClick={toggleForm}>
        {showForm ? "Cancel" : "Update"}
        </button>
      {showForm && <SandwichForm id={id} name={name} price={price} description={description} updateSandwich={updateSandwich}/>}
      <button onClick={() => deleteSandwich(id)}>Delete</button>
    </div>
  );
};


const styles = {
  info: {
    border: "3px solid green",
    margin: "5px",
    padding: "5px",
    backgroundColor: "lightGreen"
  }
}

export default Sandwich;