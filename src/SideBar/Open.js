import React from "react";
import PropTypes from "prop-types";

const Open = (props) => (
  <div className="burger" onClick={() => props.show()}>
    <i
      className="fa fa-align-justify"
      style={{ fontSize: "36px", color: "#eeeeee" }}
    ></i>
  </div>
);

Open.propTypes = {
  show: PropTypes.func.isRequired,
};

export default Open;
