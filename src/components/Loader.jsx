import React, { Component } from "react";

import "./styles/Loader.scss";

export default class Loader extends Component {
  render() {
    return (
      <div className="page style-diagonal">
        <div className="loader">
          <div className="dot dot1A"></div>
          <div className="dot dot1B"></div>
          <div className="dot dot1C"></div>

          <div className="dot dot2A"></div>
          <div className="dot dot2B"></div>
          <div className="dot dot2C"></div>

          <div className="dot dot3A"></div>
          <div className="dot dot3B"></div>
          <div className="dot dot3C"></div>
        </div>
      </div>
    );
  }
}
