import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import Loader from "../components/Loader";
import "./styles/Starship.scss";

export class Starship extends Component {
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
      const data = await api.data.getStarshipInfo(id);
      const films = await api.data.getInfoNames("films", data.films);
      const characters = await api.data.getInfoNames("people", data.pilots);

      console.log(data);
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
        <div className="starship-container">
          <Loader />
        </div>
      );
    }
    return (
      <React.Fragment>
        <div className="starship-container row">
          <div className="container-starship-image col-lg-4 col-md-12">
            <img
              src={require(`../images/starships/${this.state.data.name}.jpg`)}
              alt={this.state.data.name}
            />
          </div>
          <div className="container-starship-info col-lg-8 col-md-12">
            <h1>{this.state.data.name}</h1>
            <div className="starship-info-box">
              <h4>Modelo:</h4>
              <p>{this.state.data.model}</p>
            </div>
            <div className="starship-info-box">
              <h4>Clase:</h4>
              <p>{this.state.data.starship_class}</p>
            </div>
            <div className="starship-info-box">
              <h4>Fabricante:</h4>
              <p>{this.state.data.manufacturer}</p>
            </div>
            <div className="starship-info-box">
              <h4>Tripulación:</h4>
              <p>{this.state.data.crew}</p>
            </div>
            <div className="starship-info-box">
              <h4>Pasajeros:</h4>
              <p>{this.state.data.passengers}</p>
            </div>
            <div className="starship-info-box">
              <h4>Capacidad de carga:</h4>
              <p>{this.numberFormat(this.state.data.cargo_capacity)}</p>
            </div>
            <div className="starship-info-box">
              <h4>Calificación de hiperimpulsor:</h4>
              <p>{this.state.data.hyperdrive_rating}</p>
            </div>
            <div className="starship-info-box">
              <h4>Costo en créditos:</h4>
              <p>{this.numberFormat(this.state.data.cost_in_credits)}</p>
            </div>
            <div className="starship-info-box">
              <h4>Velocidad máxima en la atmósfera:</h4>
              <p>{this.numberFormat(this.state.data.max_atmosphering_speed)}</p>
            </div>
            <div className="starship-info-box">
              <h4>Suministros:</h4>
              <p>{this.state.data.consumables}</p>
            </div>
            <div className="starship-info-box">
              <h4>Pilotos:</h4>
              {this.state.characters.length === 0 ? (
                <p>Sin Pilotos</p>
              ) : (
                this.state.characters.map((character, id) => {
                  return (
                    <div className="starship-image-container">
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
            <div className="starship-info-box">
              <h4>Apariciones:</h4>
              {this.state.films.map((film, id) => {
                return (
                  <div className="starship-image-container">
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
              })}
            </div>
            <Link to="/starships" className="btn btn-primary mt-3">
              Naves
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Starship;
