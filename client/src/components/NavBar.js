import {Link} from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
  <div style={styles.navbar}>
    <Link to='/'>Sandwiches</Link>
    &nbsp; &nbsp;
    <Link to='/about'>About</Link>
    &nbsp; &nbsp;
    <Link to='/sandwiches/new'>New Sandwich Form</Link>
  </div>
  );
};

const styles = {
  navbar:{
    border: "3px solid blue",
    padding: "5px",
    margin: "5px",
    backgroundColor: "lightBlue"
  }
}

export default Navbar;