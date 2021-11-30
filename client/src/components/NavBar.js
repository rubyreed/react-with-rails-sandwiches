import {Link} from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
  <div>
    <Link to='/'>Sandwiches</Link>
    <Link to='/about'>About</Link>
    <Link to='/sandwiches/new'>Sandwich Form</Link>
  </div>
  );
};

export default Navbar;