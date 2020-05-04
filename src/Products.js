import React from "react";
import ProductsItem from "./ProductsItem";
import PropTypes from "prop-types";

const Products = ({ products, onClick }) => {
  console.log("[Products.js] rendering...");
  const productsdata = products.map((product) => {
    return (
      <ProductsItem product={product} key={product.id} onClick={onClick} />
    );
  });
  return <div className="products">{productsdata}</div>;
};

Products.propTypes = {
  products: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default React.memo(Products);
