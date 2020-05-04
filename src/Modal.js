import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Modal extends React.Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    hide: PropTypes.func.isRequired,
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[shouldComponentUpdate]");
    if (nextProps.show !== this.props.show) {
      return true;
    } else {
      return false;
    }
  }
  componentDidUpdate() {
    console.log("[componentDidUpdate]");
  }

  render() {
    if (this.props.show) {
      return (
        <div className="Modal">
          <h1>Are you sure?</h1>
          <div>
            <button className="success">
              <Link to="/form">CONFIRM</Link>
            </button>
            <button className="danger" onClick={() => this.props.hide()}>
              CANCEL
            </button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Modal;
