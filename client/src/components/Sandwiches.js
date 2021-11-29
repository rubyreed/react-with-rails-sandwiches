import React, {useEffect, useState} from "react";
import axios from "axios";
import Sandwich from "./Sandwich";
import SandwichForm from "./SandwichForm";

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

  const renderSandwiches = () => {
    if (sandwiches.length === 0) {
      return <p>Sold Out</p>;
    }
    return sandwiches.map((sandwich) => {
      return <Sandwich key={sandwich.id}{...sandwich}/>;
    });
  };

  return(
    <div>
      <h1>Sandwiches</h1>
      <SandwichForm />
      {renderSandwiches()}
    </div>
  );
};

export default Sandwiches;