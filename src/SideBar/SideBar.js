import React from "react";
import NavbarItems from "../Navbar/NavbarItems";
import Open from "./Open";
import Close from "./Close";
import PropTypes from "prop-types";

const SideBar = (props) => {
  let classes = [];
  let open = "open";

  if (props.showSideBar) {
    classes.push(open);
  }
  return (
    <div className={`SideBar ${classes}`}>
      {!props.showSideBar ? (
        <Open show={props.sideBarShow} />
      ) : (
        <Close close={props.sideBarClose} />
      )}

      <NavbarItems />
    </div>
  );
};

SideBar.propTypes = {
  showSideBar: PropTypes.bool.isRequired,
  sideBarShow: PropTypes.func.isRequired,
  sideBarClose: PropTypes.func.isRequired,
};

export default SideBar;
