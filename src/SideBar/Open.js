import React from "react";

const Open = (props) => (
  <div className="burger" onClick={() => props.show()}>
    <i
      className="fa fa-align-justify"
      style={{ fontSize: "36px", color: "#eeeeee" }}
    ></i>
  </div>
);

export default Open;
