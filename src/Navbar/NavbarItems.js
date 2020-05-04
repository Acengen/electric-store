import React from "react";
import { Link } from "react-router-dom";

const NavbarItems = () => (
  <div className="navbaritems">
    <Link to="/">Home</Link>
    <Link to="/form">Form</Link>
  </div>
);

export default NavbarItems;
