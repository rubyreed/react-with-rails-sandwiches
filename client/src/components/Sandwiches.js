import React, {useEffect, useState} from "react";
import axios from "axios";
import Sandwich from "./Sandwich";
// import SandwichForm from "./SandwichForm";

const Sandwiches= () => {
  const [sandwiches, setSandwiches]=useState([]);
  useEffect(() => {
    console.log("mounted");
    getSandwiches();
  },[]);

  const getSandwiches = async () => {
    let response = await axios.get("/api/sandwiches");
    setSandwiches(response.data);
  };

  const updateSandwich = (changedSandwich) => {
    let updatedSandwiches = sandwiches.map((sandwich) => (sandwich.id === changedSandwich.id ? changedSandwich : sandwich));
  setSandwiches(updatedSandwiches)
  };
  

  const deleteSandwich = async (id) => {
    //removes from DB
    let response = await axios.delete(`/api/sandwiches/${id}`);
    //remove from UI
   let filteredSandwiches = sandwiches.filter((sandwich) => sandwich.id !== id);
   setSandwiches(filteredSandwiches);
  };

  const renderSandwiches = () => {
    if (sandwiches.length === 0) {
      return <p>Sold Out</p>;
    }
    return sandwiches.map((sandwich) => {
      return <Sandwich key={sandwich.id}{...sandwich} deleteSandwich={deleteSandwich} updateSandwich={updateSandwich}/>;
    });
  };

  // const displayNewSandwich = (sandwich) => {
  //   setSandwiches([sandwich,...sandwiches])
  // };


  return(
    <div>
      <h1 style={styles.header}>Sandwich Menu</h1>
      {/* <SandwichForm newestSandwich = {displayNewSandwich}/> */}
      {renderSandwiches()}
    </div>
  );
};

const styles = {

  header:{
    border: "5px solid gray",
    margin: "5px",
    padding: "5px",
    backgroundColor: "purple",
    color: "white"
  }
};

export default Sandwiches;