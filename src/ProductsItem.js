import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductsItem = ({ product, onClick }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={product.picture} alt="autoparts" />
      <div className="card-body">
        <p className="card-title">{product.type}</p>
      </div>
      <div className="card-header">
        <p className="price">US ${product.price} / Piece</p>
        <p>{product.mini} pieces (MIN.order)</p>
        <p>
          5.0
          <span
            className="fa fa-star checked"
            style={{ color: "orange" }}
          ></span>
        </p>
        <button onClick={() => onClick(product.price, product)}>Buy</button>
        <Link to={`/${product.id}`}>More </Link>
      </div>
    </div>
  );
};

ProductsItem.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default React.memo(ProductsItem);
