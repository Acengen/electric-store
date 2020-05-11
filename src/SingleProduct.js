import React, { Component } from "react";
import { Link } from "react-router-dom";

class SingleProduct extends Component {
  render() {
    let productsSingle = [];

    productsSingle = this.props.products.map((product) => {
      if (parseFloat(this.props.match.params.id) === product.id) {
        return (
          <div className="card" style={{ width: "400px" }} key={product.id}>
            <h4 className="card-header">{product.type}</h4>
            <div className="card-body">
              <p
                className="price"
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  backgroundColor: "green",
                  color: "white",
                  padding: "10px",
                }}
              >
                US ${product.price} / Piece
              </p>
              <p>{product.mini} pieces MIN.order</p>
            </div>
            <Link to={`/${product.id}/about`}>About this Product</Link>
            <Link className="single-product-nav" to="/">
              Back
            </Link>
          </div>
        );
      }
    });

    return <div className="singleProduct">{productsSingle}</div>;
  }
}

export default SingleProduct;
