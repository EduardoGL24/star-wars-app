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
  handleClick = () => {
    const menu = document.getElementById("navbar-responsive");
    menu.classList.toggle("menu-animate");
    menu.classList.toggle("menu-visible");
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navbar fixed-top row no-margin" id="navbar-fixed">
          <div className="col-md-2 col-sm-5 navbar-container-image">
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
          <div
            className="col-md-10 col-sm-7 navbar-container-items"
            id="container-menu"
          >
            <div
              onClick={this.handleClick}
              className="navbar-container-responsive"
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
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
                <Link to="/films" className="nav-link" href="#">
                  Peliculas
                </Link>
                <img
                  className="navbar-item-lightsaber"
                  src={require("../images/sable.png")}
                  alt=""
                />
              </li>
              <li className="navbar-item">
                <Link to="/starships" className="nav-link" href="#">
                  Naves
                </Link>
                <img
                  className="navbar-item-lightsaber"
                  src={require("../images/sable.png")}
                  alt=""
                />
              </li>
              <li className="navbar-item">
                <Link to="/vehicles" className="nav-link" href="#">
                  Vehiculos
                </Link>
                <img
                  className="navbar-item-lightsaber"
                  src={require("../images/sable.png")}
                  alt=""
                />
              </li>
              <li className="navbar-item">
                <Link to="/planets" className="nav-link" href="#">
                  Planetas
                </Link>
                <img
                  className="navbar-item-lightsaber"
                  src={require("../images/sable.png")}
                  alt=""
                />
              </li>
            </ul>

            <ul
              className="navbar-list-responsive"
              id="navbar-responsive"
              onClick={this.handleClick}
            >
              <li className="navbar-item">
                <Link to="/" className="nav-link" href="#">
                  Home
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/characters" className="nav-link" href="#">
                  Personajes
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/films" className="nav-link" href="#">
                  Peliculas
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/starships" className="nav-link" href="#">
                  Naves
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/vehicles" className="nav-link" href="#">
                  Vehiculos
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/planets" className="nav-link" href="#">
                  Planetas
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
