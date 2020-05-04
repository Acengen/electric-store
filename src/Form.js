import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "./axios/axios";
import OrderModal from "./orderModal/OrderModal";
import Spinner from "./Spinner/Spinner";

class Form extends Component {
  state = {
    name: "",
    Lastname: "",
    zip: null,
    city: "Nis",
    mobile: null,
    finnished: false,
    loading: false,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const customers = {
      Name: this.state.name,
      Lastname: this.state.Lastname,
      Zip: this.state.zip,
      City: this.state.city,
      Mobile: this.state.mobile,
      ProductsOrdered: this.props.selectedProdicts,
    };
    axios
      .post("products/customer.json", customers)
      .then((respon) => this.setState({ finnished: true }));
  };

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  order = () => {
    this.setState({
      loading: true,
    });

    setTimeout(() => {
      this.setState({
        finnished: false,
      });
    }, 5000);

    this.setState({
      loading: false,
    });
  };

  render() {
    return (
      <div className="form-main">
        {this.state.finnished ? (
          <OrderModal />
        ) : (
          <div>
            <h3>Order CheckList</h3>
            <form onSubmit={this.onSubmit}>
              <input
                id="name"
                name="name"
                onChange={this.onChange}
                type="text"
                placeholder="Firstname"
              />
              <input
                id="Lastname"
                name="last"
                onChange={this.onChange}
                type="text"
                placeholder="Lastname"
              />
              <input
                id="zip"
                name="zip"
                onChange={this.onChange}
                type="number"
                placeholder="Zip Code"
              />
              <input
                id="city"
                name="city"
                onChange={this.onChange}
                type="text"
                placeholder="City"
              />
              <input
                id="mobile"
                name="mobile"
                onChange={this.onChange}
                type="number"
                placeholder="Mobile"
              />
              <button onClick={() => this.order()} type="submit">
                Order
              </button>
              <Link to="/">Go back</Link>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Form;
