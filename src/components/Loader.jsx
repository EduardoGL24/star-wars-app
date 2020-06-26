import React, { Component } from "react";

import "./styles/Loader.scss";

export default class Loader extends Component {
  render() {
    return (
      <div class="page style-diagonal">
        <div class="loader">
          <div class="dot dot1A"></div>
          <div class="dot dot1B"></div>
          <div class="dot dot1C"></div>

          <div class="dot dot2A"></div>
          <div class="dot dot2B"></div>
          <div class="dot dot2C"></div>

          <div class="dot dot3A"></div>
          <div class="dot dot3B"></div>
          <div class="dot dot3C"></div>
        </div>
      </div>
    );
  }
}
