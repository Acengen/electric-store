import React from "react";
import PropTypes from "prop-types";

const Close = (props) => {
  return (
    <div className="closeSide" onClick={() => props.close()}>
      <i className="fa fa-minus-square-o" style={{ fontSize: "36px" }}></i>
    </div>
  );
};

Close.propTypes = {
  close: PropTypes.func.isRequired,
};

export default Close;
