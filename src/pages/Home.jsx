import React, { Component } from "react";
import Typed from "typed.js";
import "./styles/Home.scss";
import { Link } from "react-router-dom";

export class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    new Typed(".clase", {
      strings: [
        '<i className="text-animated">characters</i>',
        '<i className="text-animated">films</i>',
        '<i className="text-animated">starships</i>',
        '<i className="text-animated">vehicles</i>',
        '<i className="text-animated">planets</i>',
      ],
      typeSpeed: 75,
      startDelay: 300,
      backSpeed: 75,
      backDelay: 1000,
      loop: true,
      contentType: "html",
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="home-container">
          <div className="home-text-animation element-loaded">
            <h2>
              Know about star wars
              <br />
              <span className="clase"></span>
            </h2>
          </div>
          <div className="home-text-description element-loaded">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias maiores sit, repellat sed harum officiis{" "}
            </p>
          </div>
          <div className="home-button-container element-loaded">
            <Link className="btn-home" to="characters">
              let's go!
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
