import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Cards } from "../components/Cards";
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
    homeworld: [],
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
      const homeworld = await api.data.getPlanetInfo(
        this.getIdInfo(data.homeworld)
      );
      this.setState({
        data: data,
        loading: false,
        error: false,
        films: films,
        starships: starships,
        species: species,
        vehicles: vehicles,
        homeworld: homeworld,
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
          <div className="container-character-image col-lg-4 col-md-12 element-loaded">
            <img
              src={require(`../images/characters/${this.state.data.name}.jpg`)}
              alt={this.state.data.name}
            />
          </div>
          <div className="character-info col-lg-8 col-md-12 element-loaded">
            <h1>{this.state.data.name}</h1>
            <div className="character-info-box">
              <h4>Altura:</h4>
              <p>
                {this.state.data.height === "unknown"
                  ? "Desconocido"
                  : this.state.data.height + " cm"}
              </p>
            </div>
            <div className="character-info-box">
              <h4>Peso:</h4>
              <p>
                {this.state.data.mass === "unknown"
                  ? "Desconocido"
                  : this.state.data.mass + " Kg"}
              </p>
            </div>
            {this.state.species.map((specie, i) => {
              return (
                <div className="character-info-box">
                  <h4>Especie:</h4>
                  <p key={i}>{specie.name}</p>
                </div>
              );
            })}
            <div className="character-info-box">
              <h4>Apariciones:</h4>
              <Cards
                items={this.state.films}
                folder="films"
                classCard="col-lg-3 col-md-4"
                moreInfo={true}
              />
            </div>
            <div className="character-info-box">
              <h4>Planeta:</h4>
              {this.state.homeworld.length === 0 ? (
                <p>Desconocido</p>
              ) : (
                <div className="character-image-container">
                  <Link
                    to={`/planets/${this.getIdInfo(this.state.homeworld.url)}`}
                  >
                    <img
                      className="image-planet"
                      src={require(`../images/planets/${this.state.homeworld.name}.jpg`)}
                      alt=""
                    />
                  </Link>
                  <p>{this.state.homeworld.name}</p>
                </div>
              )}
            </div>
            <div className="character-info-box">
              <h4>Naves:</h4>
              {this.state.starships.length === 0 ? (
                <p>Sin naves</p>
              ) : (
                <Cards
                  items={this.state.starships}
                  folder="starships"
                  classCard="col-lg-3 col-md-4"
                  moreInfo={true}
                />
              )}
            </div>
            <div className="character-info-box">
              <h4>Vehiculos:</h4>
              {this.state.vehicles.length === 0 ? (
                <p>Sin Vehiculos</p>
              ) : (
                <Cards
                  items={this.state.vehicles}
                  folder="vehicles"
                  classCard="col-lg-3 col-md-4"
                  moreInfo={true}
                />
              )}
            </div>
            <Link to="/characters" className="btn btn-primary mt-3">
              Personajes
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Character;
