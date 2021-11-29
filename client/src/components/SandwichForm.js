import React from "react";

const SandwichForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  };
  return (
  <form onSubmit={handleSubmit}>
    <p>Add New Sandwich</p>
    <input />
    <button type="submit">Add</button>
  </form>
  );
};

export default SandwichForm;