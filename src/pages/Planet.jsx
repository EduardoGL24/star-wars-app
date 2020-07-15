import React, { Component } from "react";
import { Link } from "react-router-dom";
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
              <h4>Período de rotación:</h4>
              <p>
                {this.state.data.rotation_period === "unknown"
                  ? "Desconocido"
                  : this.state.data.rotation_period + " horas"}
              </p>
            </div>
            <div className="planet-info-box">
              <h4>Período de orbita:</h4>
              <p>
                {this.state.data.orbital_period === "unknown"
                  ? "Desconocido"
                  : this.state.data.orbital_period + " dias"}
              </p>
            </div>
            <div className="planet-info-box">
              <h4>Diámetro:</h4>
              <p>
                {this.state.data.diameter === "unknown"
                  ? "Desconocido"
                  : this.numberFormat(this.state.data.diameter) + " Km"}
              </p>
            </div>
            <div className="planet-info-box">
              <h4>Clima:</h4>
              <p>
                {this.state.data.climate === "unknown"
                  ? "Desconocido"
                  : this.state.data.climate}
              </p>
            </div>
            <div className="planet-info-box">
              <h4>Gravedad:</h4>
              <p>
                {this.state.data.gravity === "unknown"
                  ? "Desconocida"
                  : this.state.data.gravity}
              </p>
            </div>
            <div className="planet-info-box">
              <h4>Población:</h4>
              <p>
                {this.state.data.population === "unknown"
                  ? "Desconocida"
                  : this.numberFormat(this.state.data.population)}
              </p>
            </div>
            <div className="planet-info-box">
              <h4>Residentes:</h4>
              {this.state.characters.length === 0 ? (
                <p>Sin Pilotos</p>
              ) : (
                this.state.characters.map((character, id) => {
                  return (
                    <div className="planet-image-container">
                      <Link to={`/characters/${this.getIdInfo(character.url)}`}>
                        <img
                          key={id}
                          src={require(`../images/characters/${character.name}.jpg`)}
                          alt=""
                        />
                      </Link>
                      <p>{character.name}</p>
                    </div>
                  );
                })
              )}
            </div>
            <div className="planet-info-box">
              <h4>Apariciones:</h4>
              {this.state.films.length === 0 ? (
                <p>En ninguna pelicula</p>
              ) : (
                this.state.films.map((film, id) => {
                  return (
                    <div className="planet-image-container">
                      <Link to={`/films/${this.getIdInfo(film.url)}`}>
                        <img
                          key={id}
                          src={require(`../images/films/${film.title}.jpg`)}
                          alt=""
                        />
                      </Link>
                      <p>{film.title}</p>
                    </div>
                  );
                })
              )}
            </div>
            <Link to="/planets" className="btn btn-primary mt-3">
              Planetas
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Planet;
