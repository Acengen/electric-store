import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "./axios/axios";

/* import css */
import "./css/main.css";

import Container from "./containers/Container";
import Products from "./Products";
import SelectedProduct from "./SelectedProduct";
import Form from "./Form";
import Modal from "./Modal";
import Navbar from "./Navbar/Navbar";
import HeadLine from "./HeadLine/HeadLine";
import Contact from "./contact/Contact";
import SideBar from "./SideBar/SideBar";
import SingleProduct from "./SingleProduct";
import AboutSingleProduct from "./AboutSingleProduct";

/* For customers orders */
import Customers from "./Customers/Customers";

class App extends Component {
  state = {
    products: [
      {
        type: "Electric Tube",
        picture:
          "https://i.pinimg.com/originals/40/d0/c3/40d0c3e730637802ed020d5bcf33ac3a.jpg",
        price: 30,
        mini: 1000,
        id: 1,
      },
      {
        type: "Iskra Motor",
        picture:
          "https://images-na.ssl-images-amazon.com/images/I/61Z90Vj4DiL._AC_SL1280_.jpg",
        price: 40,
        mini: 2000,
        id: 2,
      },
      {
        type: "Bmw Motor",
        picture:
          "https://img.halooglasi.com/slike/oglasi/Thumbs/171231/l/bmw-motor-520-e39-m52-5425627201543-71784255322.jpg",
        price: 50,
        mini: 100,
        id: 3,
      },
      {
        type: "Automatic Reverse Sliding Door Opener",
        picture:
          "https://image.made-in-china.com/202f0j00sRjUZbPWLJcV/Easy-Install-Automatic-Reverse-Sliding-Door-Opener-Auto-Gate-Motor.jpg",
        price: 130,
        mini: 500,
        id: 4,
      },
      {
        type: "36mm/35mm Planetary Gearbox Stepper Motor",
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQEew84KQDl7HkiyISxosqoQR0L-NNbpiKhdonmT8gOpZUtol5&usqp=CAU",
        price: 23,
        mini: 2000,
        id: 5,
      },
      {
        type:
          "Brush Permanent Magnet Motor for Hydraulic Pump and Auto Parts 24V",
        picture:
          "https://image.made-in-china.com/2f0j00dhNYjMSafRcI/Forklift-DC-Brush-Permanent-Magnet-Motor-for-Hydraulic-Pump-and-Auto-Parts-24V-1kw-1-2kw-0-8kw-Zy105-1-0-40-2-Zy105-1-2-34-2-Zy105-800-20-2.jpg",
        price: 55,
        mini: 1000,
        id: 6,
      },
    ],
    selectedProdicts: [],
    total: 0,
    purchasable: false,
    showSideBar: false,
    auth: false,
  };

  remove = (price, index) => {
    let oldPrice = this.state.total;
    let newPrice = oldPrice - price;
    let produc = [...this.state.selectedProdicts];
    produc.splice(index, 1);
    this.setState({
      total: newPrice,
      selectedProdicts: produc,
    });
  };

  onClick = (price, product) => {
    let oldPrice = this.state.total;
    let newPrice = oldPrice + price;
    let select = [...this.state.selectedProdicts, product];
    this.setState({
      total: newPrice,
      selectedProdicts: select,
    });
  };

  /* Post request to Firebase DB */
  purchasableHandler = () => {
    const order = {
      selectedProdicts: this.state.selectedProdicts,
      total: this.state.total,
    };
    axios
      .post("/products.json", order)
      .then((respon) => console.log("Firebase success"))
      .catch((error) => console.log(error));
    this.setState({
      purchasable: true,
    });

    setTimeout(() => {
      this.setState({ purchasable: false });
    }, 5000);
  };

  purchasableHandlerCancel = () => {
    this.setState({
      purchasable: false,
    });
  };

  sideBarShow = () => {
    this.setState({
      showSideBar: true,
    });
  };
  sideBarClose = () => {
    this.setState({
      showSideBar: false,
    });
  };

  render() {
    return (
      <Router basename="/">
        <Container>
          <SideBar
            showSideBar={this.state.showSideBar}
            sideBarShow={this.sideBarShow}
            sideBarClose={this.sideBarClose}
          />
          <Navbar />

          <Route path="/contact" exact component={Contact} />

          <Route
            path="/"
            exact
            render={(props) => (
              <Fragment>
                <HeadLine />
                <Products
                  products={this.state.products}
                  onClick={this.onClick}
                />
                <div className="total">
                  <h3>Total cost: ${this.state.total}</h3>
                </div>
                <div className="selected-products">
                  <h2>Your Cart</h2>
                  {this.state.selectedProdicts.length < 1 ? (
                    <p>Empty</p>
                  ) : (
                    <SelectedProduct
                      selectedProdicts={this.state.selectedProdicts}
                      remove={this.remove}
                    />
                  )}
                </div>
                {this.state.selectedProdicts.length > 0 && (
                  <div className="link-to-form">
                    <button
                      className="purchase"
                      onClick={() => this.purchasableHandler()}
                    >
                      Continue to Checklist
                    </button>
                  </div>
                )}
                <Modal
                  show={this.state.purchasable}
                  hide={this.purchasableHandlerCancel}
                ></Modal>
              </Fragment>
            )}
          />
          <Route
            path="/form"
            exact
            render={(props) => (
              <Form
                selectedProdicts={this.state.selectedProdicts}
                total={this.state.total}
              />
            )}
          />
          <Route
            path="/:id"
            exact
            render={(props) => (
              <SingleProduct {...props} products={this.state.products} />
            )}
          />
          <Route path="/customers" exact component={Customers} />
          <Route
            path="/:id/about"
            exact
            render={(props) => (
              <AboutSingleProduct {...props} products={this.state.products} />
            )}
          />
        </Container>
      </Router>
    );
  }
}

export default App;
