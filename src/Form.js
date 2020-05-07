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
    let classes = [];
    let redirect = null;
    if (
      this.state.name === "" ||
      this.state.Lastname === "" ||
      this.state.zip === null ||
      this.state.city === "" ||
      this.state.mobile === null
    ) {
      classes.push(null);
    } else {
      classes.push(btnClass);
    }

    if (this.state.submitted) {
      redirect = <Redirect to="/" />;
    }
    return (
      <div className="form-main">
        {redirect}
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
              {this.state.mobile !== null && (
                <button
                  className={`order ${classes}`}
                  onClick={() => this.order()}
                  type="submit"
                >
                  Order
                </button>
              )}

              <Link to="/">Go back</Link>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Form;
