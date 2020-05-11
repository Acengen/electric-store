import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "./axios/axios";
import OrderModal from "./orderModal/OrderModal";

class Form extends Component {
  state = {
    name: "",
    Lastname: "",
    zip: null,
    city: "",
    mobile: null,
    finnished: false,
    submitted: false,
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
    axios.post("products/customer.json", customers).then((respon) => {
      this.setState({ finnished: true });
      console.log("Firebase ordered");
    });
  };

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  order = () => {
    setTimeout(() => {
      this.setState({
        finnished: false,
        name: "",
        Lastname: "",
        zip: null,
        city: "",
        mobile: null,
        submitted: true,
      });
    }, 2000);
  };

  render() {
    let btnClass = "green";
    let btnNone = "dont";
    let inputError = "invalid";
    let inputSuccess = "valid";
    let classes = [];
    let inputClasses = [];
    let redirect = null;
    if (
      this.state.name === "" ||
      this.state.name.length <= 3 ||
      this.state.Lastname === "" ||
      this.state.zip === null ||
      this.state.zip.length <= 4 ||
      this.state.city === "" ||
      this.state.mobile === null
    ) {
      classes.push(btnNone);
      inputClasses.push(inputError);
    } else {
      classes.push(btnClass);
      inputClasses.push(inputSuccess);
    }

    if (this.state.submitted) {
      redirect = <Redirect to="/" />;
    }

    let orderForm = (
      <div>
        <input
          id="name"
          name="name"
          className={`inp ${inputClasses}`}
          onChange={this.onChange}
          type="text"
          placeholder="Firstname"
          required
        />
        <input
          id="Lastname"
          name="last"
          className={`inp ${inputClasses}`}
          onChange={this.onChange}
          type="text"
          placeholder="Lastname"
          required
        />
        <input
          id="zip"
          name="zip"
          className={`inp ${inputClasses}`}
          onChange={this.onChange}
          type="number"
          placeholder="Zip Code"
          required
        />
        <input
          id="city"
          name="city"
          className={`inp ${inputClasses}`}
          onChange={this.onChange}
          type="text"
          placeholder="City"
          required
        />
        <input
          id="mobile"
          name="mobile"
          className={`inp ${inputClasses}`}
          onChange={this.onChange}
          type="number"
          placeholder="Mobile"
          required
        />

        <button
          className={`${classes}`}
          onClick={() => this.order()}
          type="submit"
        >
          Order
        </button>

        <Link to="/">Go back</Link>
      </div>
    );
    return (
      <div className="form-main">
        {redirect}
        {this.state.finnished ? (
          <OrderModal />
        ) : (
          <div>
            <h3>Order CheckList</h3>
            <form onSubmit={this.onSubmit}>{this.props.auth && orderForm}</form>
          </div>
        )}
      </div>
    );
  }
}

export default Form;
