import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.scss";

export class Navbar extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const navbar = document.getElementById("navbar-fixed");
    if (window.pageYOffset > 0) {
      navbar.classList.add("navbar-color");
    } else if (window.pageYOffset === 0) {
      navbar.classList.remove("navbar-color");
    }
  }
  render() {
    return (
      <React.Fragment>
        <nav className="navbar fixed-top row no-margin" id="navbar-fixed">
          <div className="col-md-2">
            <Link to="/" className="navbar-brand" href="#">
              <img
                src={require("../images/logo.png")}
                width="200"
                height="auto"
                alt="Star wars"
                loading="lazy"
              />
            </Link>
          </div>
          <div className="col-md-10 navbar-container-items">
            <ul className="navbar-list">
              <li className="navbar-item">
                <Link to="/" className="nav-link" href="#">
                  Home
                </Link>
                <img
                  className="navbar-item-lightsaber"
                  src={require("../images/sable.png")}
                  alt=""
                />
              </li>
              <li className="navbar-item">
                <Link to="/characters" className="nav-link" href="#">
                  Personajes
                </Link>
                <img
                  className="navbar-item-lightsaber"
                  src={require("../images/sable.png")}
                  alt=""
                />
              </li>
              <li className="navbar-item">
                <Link to="/characters" className="nav-link" href="#">
                  Peliculas
                </Link>
                <img
                  className="navbar-item-lightsaber"
                  src={require("../images/sable.png")}
                  alt=""
                />
              </li>
              <li className="navbar-item">
                <Link to="/characters" className="nav-link" href="#">
                  Personajes
                </Link>
                <img
                  className="navbar-item-lightsaber"
                  src={require("../images/sable.png")}
                  alt=""
                />
              </li>
              <li className="navbar-item">
                <Link to="/characters" className="nav-link" href="#">
                  Vehiculos
                </Link>
                <img
                  className="navbar-item-lightsaber"
                  src={require("../images/sable.png")}
                  alt=""
                />
              </li>
              <li className="navbar-item">
                <Link to="/characters" className="nav-link" href="#">
                  Especies
                </Link>
                <img
                  className="navbar-item-lightsaber"
                  src={require("../images/sable.png")}
                  alt=""
                />
              </li>
              <li className="navbar-item">
                <Link to="/characters" className="nav-link" href="#">
                  Planetas
                </Link>
                <img
                  className="navbar-item-lightsaber"
                  src={require("../images/sable.png")}
                  alt=""
                />
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
