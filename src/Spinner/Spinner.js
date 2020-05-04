import React, { Fragment } from "react";
import spinner from "../images/loading-spinner-animated-gif-10.gif";

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: "400px", margin: "auto", display: "block" }}
      alt="spinner img"
    />
  </Fragment>
);

export default Spinner;
