import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import Loader from "../components/Loader";
import "./styles/Film.scss";

export class Film extends Component {
  state = {
    data: [],
    loader: true,
    error: false,
    characters: [],
    planets: [],
    starships: [],
    vehicles: [],
    species: [],
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.fetchData();
  }

  fetchData = async () => {
    let id = this.getIdInfo(window.location.pathname);
    this.setState({ loading: true, error: false });
    try {
      const data = await api.data.getFilmInfo(id);
      const characters = await api.data.getInfoNames("people", data.characters);
      const planets = await api.data.getInfoNames("planets", data.planets);
      const starships = await api.data.getInfoNames(
        "starships",
        data.starships
      );
      const vehicles = await api.data.getInfoNames("vehicles", data.vehicles);
      const species = await api.data.getInfoNames("species", data.species);

      console.log(vehicles);
      console.log(data);
      this.setState({
        data: data,
        loading: false,
        error: false,
        characters: characters,
        planets: planets,
        starships: starships,
        vehicles: vehicles,
        species: species,
      });
      console.log(this.state.vehicle);
    } catch (err) {
      console.log(err);
      this.setState({ loading: false, error: true });
    }
  };

  getIdInfo = (arg) => arg.replace(/\D/g, "");

  render() {
    if (this.state.loading === true) {
      return (
        <div className="film-container">
          <Loader />
        </div>
      );
    }
    return (
      <React.Fragment>
        <div className="film-container row">
          <div className="container-film-image col-lg-4 col-md-12">
            <img
              src={require(`../images/films/${this.state.data.title}.jpg`)}
              alt={this.state.data.title}
            />
          </div>
          <div className="container-film-info col-lg-8 col-md-12">
            <h1>{this.state.data.title}</h1>
            <div className="film-info-box">
              <h4>Episodio:</h4>
              <p>{this.state.data.episode_id}</p>
            </div>
            <div className="film-info-box">
              <h4>Fecha de lanzamiento:</h4>
              <p>{this.state.data.release_date}</p>
            </div>
            <div className="film-info-box">
              <h4>Productor:</h4>
              <p>{this.state.data.producer}</p>
            </div>
            <div className="film-info-box">
              <h4>Opening:</h4>
              <p>{this.state.data.opening_crawl}</p>
            </div>
            <div className="film-info-box">
              <h4>Personajes:</h4>
              {this.state.characters.map((character, id) => {
                return (
                  <div className="film-image-container">
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
              })}
            </div>
            <div className="film-info-box">
              <h4>Planetas:</h4>
              {this.state.planets.map((planet, id) => {
                return (
                  <div className="film-image-container">
                    <Link to={`/planets/${this.getIdInfo(planet.url)}`}>
                      <img
                        key={id}
                        src={require(`../images/planets/${planet.name}.jpg`)}
                        alt=""
                      />
                    </Link>
                    <p>{planet.name}</p>
                  </div>
                );
              })}
            </div>
            <div className="film-info-box">
              <h4>Naves:</h4>
              {this.state.starships.map((starship, id) => {
                return (
                  <div className="film-image-container">
                    <Link to={`/starships/${this.getIdInfo(starship.url)}`}>
                      <img
                        key={id}
                        src={require(`../images/starships/${starship.name}.jpg`)}
                        alt=""
                      />
                    </Link>
                    <p>{starship.name}</p>
                  </div>
                );
              })}
            </div>
            <div className="film-info-box">
              <h4>Vehiculos</h4>
              {this.state.vehicles.map((vehicle, id) => {
                return (
                  <div className="film-image-container">
                    <Link to={`/vehicles/${this.getIdInfo(vehicle.url)}`}>
                      <img
                        key={id}
                        src={require(`../images/vehicles/${vehicle.name}.jpg`)}
                        alt=""
                      />
                    </Link>
                    <p>{vehicle.name}</p>
                  </div>
                );
              })}
            </div>
            <div className="film-info-box">
              <h4>Especies:</h4>
              <ul>
                {this.state.species.map((specie, id) => {
                  return <li key={id}>{specie.name}</li>;
                })}
              </ul>
            </div>
            <Link to="/films" className="btn btn-primary mt-3">
              Peliculas
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Film;
