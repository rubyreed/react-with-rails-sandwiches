import React, {useState} from "react";
import axios from "axios";

const SandwichForm = (props) => {
  const {newestSandwich} = props
  const [nameState, setNameState] = useState("")
  const [priceState, setPriceState] = useState("")
  const [descriptionState, setDescriptionState] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSandwich = {name: nameState, price: priceState, description: descriptionState};
    let response = await axios.post("/api/sandwiches", newSandwich);
    newestSandwich(response.data)
  };
  return (
  <div style={styles.form}>
    <h1>Add New Sandwich</h1>
      <form onSubmit={handleSubmit}>
        <p>Name:</p>
        <input value = {nameState} onChange = {(e) => setNameState(e.target.value)}/>
        <p>Price:</p>
        <input value = {priceState} onChange = {(e) => setPriceState(e.target.value)}/>
        <p>Description:</p>
        <input value = {descriptionState} onChange = {(e) => setDescriptionState(e.target.value)}/>
        <br/>
        <button>Click to Add New Sandwich</button>
      </form>
  </div>
  );
};

const styles = {
  form: {
    border: "3px solid blue",
    margin: "5px",
    padding: "5px"
  }
}

export default SandwichForm;