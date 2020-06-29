import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import Loader from "../components/Loader";
import "./styles/Character.scss";

export class Character extends Component {
  state = {
    data: [],
    loader: true,
    error: false,
    films: [],
    starships: [],
    species: [],
    vehicles: [],
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.fetchData();
  }

  fetchData = async () => {
    let id = this.getIdInfo(window.location.pathname);
    this.setState({ loading: true, error: false });
    try {
      const data = await api.data.getInfoCharacter(id);
      const films = await api.data.getInfoNames("films", data.films);
      const starships = await api.data.getInfoNames(
        "starships",
        data.starships
      );
      const species = await api.data.getInfoNames("species", data.species);
      const vehicles = await api.data.getInfoNames("vehicles", data.vehicles);
      console.log(species);
      this.setState({
        data: data,
        loading: false,
        error: false,
        films: films,
        starships: starships,
        species: species,
        vehicles: vehicles,
      });
    } catch (err) {
      console.log(err);
      this.setState({ loading: false, error: true });
    }
  };
  getIdInfo = (arg) => arg.replace(/\D/g, "");
  render() {
    if (this.state.loading === true) {
      return (
        <div className="character-container">
          <Loader />
        </div>
      );
    }
    return (
      <React.Fragment>
        <div className="character-container row">
          <div className="container-character-image col-md-4">
            <img
              src={require(`../images/characters/${this.state.data.name}.jpg`)}
              alt={this.state.data.name}
            />
          </div>
          <div className="character-info col-md-8">
            <h1>{this.state.data.name}</h1>
            <h4>Altura:</h4>
            <p>{this.state.data.height} cm</p>
            <h4>Peso:</h4>
            <p>
              {this.state.data.mass === "unknown"
                ? "Desconocido"
                : this.state.data.mass + "Kg"}
            </p>
            <h4>Especie:</h4>
            {this.state.species.map((specie, id) => {
              return <p key={id}>{specie.name}</p>;
            })}
            <h4>Apariciones:</h4>
            {this.state.films.map((film, id) => {
              return (
                <img
                  key={id}
                  src={require(`../images/films/${film.title}.jpg`)}
                  alt=""
                />
              );
            })}
            <p>{this.state.data.name}</p>
            <Link to="/characters" className="btn btn-primary">
              Regresar
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Character;
