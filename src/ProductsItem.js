import React from "react";

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
      </div>
    </div>
  );
};

export default React.memo(ProductsItem);
