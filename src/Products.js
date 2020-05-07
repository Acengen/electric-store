import React from "react";
import ProductsItem from "./ProductsItem";
import PropTypes from "prop-types";

class Products extends React.Component {
  render() {
    const productsData = this.props.products.map((product) => {
      return (
        <ProductsItem
          product={product}
          key={product.id}
          onClick={this.props.onClick}
        />
      );
    });
    return <div className="products">{productsData}</div>;
  }
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default React.memo(Products);
