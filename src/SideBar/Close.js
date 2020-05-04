import React from "react";

const Close = (props) => {
  return (
    <div className="closeSide" onClick={() => props.close()}>
      <i className="fa fa-minus-square-o" style={{ fontSize: "36px" }}></i>
    </div>
  );
};

export default Close;
