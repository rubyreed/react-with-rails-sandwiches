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
      <p>id: {id}</p>
      <p>name: {name}</p>
      <p>price: {price}</p>
      <p>description: {description}</p>
      <button onClick={toggleForm}>
        {showForm ? "cancel" : "update"}
        </button>
      {showForm && <SandwichForm id={id} name={name} price={price} description={description} updateSandwich={updateSandwich}/>}
      <button onClick={() => deleteSandwich(id)}>Delete This Sandwich</button>
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