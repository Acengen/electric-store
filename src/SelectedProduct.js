import React from "react";
import PropTypes from "prop-types";

const SelectedProduct = ({ selectedProdicts, remove }) => {
  const product = selectedProdicts.map((select, index) => {
    return (
      <div
        className="card"
        style={{ width: "300px" }}
        key={Math.random() * 100 + 1}
      >
        <div className="card-body">
          <h3>{select.type}</h3>
        </div>
        <div className="card-bottom">
          <p className="card-header">${select.price}</p>
        </div>
        <button onClick={() => remove(select.price, index)}>
          Remove
          <i
            className="fa fa-minus-circle"
            style={{ fontSize: "24px", marginLeft: "5px" }}
          ></i>
        </button>
      </div>
    );
  });

  return <div className="selected-ones">{product}</div>;
};

SelectedProduct.propTypes = {
  selectedProdicts: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired,
};

export default SelectedProduct;
