import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/NotFound.scss";
export class NotFound extends Component {
  render() {
    return (
      <div className="not-found-container row">
        <div className="not-found-container-image col-md-6 col-xs-12 mb-4">
          <img src={require("../images/404.png")} alt="" />
        </div>
        <div className="not-found-conatiner-text col-md-6 col-xs-12">
          <h1 className="mb-4">404</h1>
          <h2 className="mb-4">Oh no!</h2>
          <h2 className="mb-5">You are lost in the galaxy</h2>
          <Link className="btn btn-primary" to="/">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }
}

export default NotFound;
