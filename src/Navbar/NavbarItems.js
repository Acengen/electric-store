import React from "react";
import { NavLink } from "react-router-dom";

const NavbarItems = () => (
  <div className="navbaritems">
    <NavLink to="/" exact>
      Home
    </NavLink>
    <NavLink to="/form" exact>
      Order Page
    </NavLink>
    <NavLink to="/contact" exact>
      Contact
    </NavLink>
    <NavLink to="/customers" exact>
      Customers Orders
    </NavLink>
  </div>
);

export default NavbarItems;
