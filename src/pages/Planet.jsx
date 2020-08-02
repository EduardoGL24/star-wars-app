import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Cards } from "../components/Cards";
import api from "../api";
import Loader from "../components/Loader";
import "./styles/Planet.scss";

export class Planet extends Component {
  state = {
    data: [],
    loader: true,
    error: false,
    characters: [],
    films: [],
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.fetchData();
  }

  fetchData = async () => {
    let id = this.getIdInfo(window.location.pathname);
    this.setState({ loading: true, error: false });
    try {
      const data = await api.data.getPlanetInfo(id);
      const films = await api.data.getInfoNames("films", data.films);
      const characters = await api.data.getInfoNames("people", data.residents);
      this.setState({
        data: data,
        loading: false,
        error: false,
        characters: characters,
        films: films,
      });
    } catch (err) {
      console.log(err);
      this.setState({ loading: false, error: true });
    }
  };

  getIdInfo = (arg) => arg.replace(/\D/g, "");

  numberFormat = (num) => Number(num).toLocaleString(navigator.language);

  render() {
    if (this.state.loading === true) {
      return (
        <div className="planet-container">
          <Loader />
        </div>
      );
    }
    return (
      <React.Fragment>
        <div className="planet-container row">
          <div className="container-planet-image col-lg-5 col-md-12">
            <img
              src={require(`../images/planets/${this.state.data.name}.jpg`)}
              alt={this.state.data.name}
            />
          </div>
          <div className="container-planet-info col-lg-7 col-md-12">
            <h1>{this.state.data.name}</h1>
            <div className="planet-info-box">
              <h4>Rotation Period:</h4>
              <p>
                {this.state.data.rotation_period === "unknown"
                  ? "Unknown"
                  : this.state.data.rotation_period + " hours"}
              </p>
            </div>
            <div className="planet-info-box">
              <h4>Orbital Period:</h4>
              <p>
                {this.state.data.orbital_period === "unknown"
                  ? "Unknown"
                  : this.state.data.orbital_period + " days"}
              </p>
            </div>
            <div className="planet-info-box">
              <h4>Diameter:</h4>
              <p>
                {this.state.data.diameter === "unknown"
                  ? "Unknown"
                  : this.numberFormat(this.state.data.diameter) + " Km"}
              </p>
            </div>
            <div className="planet-info-box">
              <h4>Climate:</h4>
              <p>
                {this.state.data.climate === "unknown"
                  ? "Unknown"
                  : this.state.data.climate}
              </p>
            </div>
            <div className="planet-info-box">
              <h4>Gravity:</h4>
              <p>
                {this.state.data.gravity === "unknown"
                  ? "Unknown"
                  : this.state.data.gravity}
              </p>
            </div>
            <div className="planet-info-box">
              <h4>Population:</h4>
              <p>
                {this.state.data.population === "unknown"
                  ? "Unknown"
                  : this.numberFormat(this.state.data.population)}
              </p>
            </div>
            <div className="planet-info-box">
              <h4>Residents:</h4>
              {this.state.characters.length === 0 ? (
                <p>Unknown</p>
              ) : (
                <Cards
                  items={this.state.characters}
                  folder="characters"
                  classCard="col-lg-3 col-md-4"
                  moreInfo={true}
                />
              )}
            </div>
            <div className="planet-info-box">
              <h4>Films:</h4>
              {this.state.films.length === 0 ? (
                <p>None</p>
              ) : (
                <Cards
                  items={this.state.films}
                  folder="films"
                  classCard="col-lg-3 col-md-4"
                  moreInfo={true}
                />
              )}
            </div>
            <Link to="/planets" className="btn btn-primary mt-3">
              Planets
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Planet;
