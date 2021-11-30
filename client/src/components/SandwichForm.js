import React, {useState} from "react";
import axios from "axios";

const SandwichForm = (props) => {
  const {newestSandwich, id, updateSandwich, name: initialName, price: initialPrice, description: initialDescription} = props
  const [nameState, setNameState] = useState(initialName ? initialName : "")
  const [priceState, setPriceState] = useState(initialPrice ? initialPrice : "")
  const [descriptionState, setDescriptionState] = useState(initialDescription ? initialDescription : "")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSandwich = {name: nameState, price: priceState, description: descriptionState};
    
    if (id) {
        let response = await axios.put(`/api/sandwiches/${id}`, newSandwich);
        console.log(response.data);
        updateSandwich(response.data);
      }
     else {
      let response = await axios.post("/api/sandwiches", newSandwich);
      newestSandwich(response.data)
  };
};

  return (
  <div style={styles.form}>
    <h1>{id ? "Edit" : "New"} Sandwich Form</h1>
      <form onSubmit={handleSubmit}>
        <p>Name:</p>
        <input value = {nameState} onChange = {(e) => setNameState(e.target.value)}/>
        <p>Price:</p>
        <input value = {priceState} onChange = {(e) => setPriceState(e.target.value)}/>
        <p>Description:</p>
        <input value = {descriptionState} onChange = {(e) => setDescriptionState(e.target.value)}/>
        <br/>
        <button>{id ? "Update" : "Create"}</button>
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