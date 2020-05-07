import React, { Component } from "react";
import axios from "../axios/axios";

class Customers extends Component {
  state = {
    customers: "",
  };
  componentDidMount() {
    this.getCustomers();
  }

  getCustomers = () => {
    axios
      .get("products/customer.json")
      .then((respon) => this.setState({ customers: respon.data }));
  };

  render() {
    console.log("CUSTOMERS ORDER", this.state.customers);
    return (
      <div className="customers-order">
        For The customers Order look at console
      </div>
    );
  }
}

export default Customers;
