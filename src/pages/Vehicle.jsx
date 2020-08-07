import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Cards } from "../components/Cards";
import api from "../api";
import Loader from "../components/Loader";
import "./styles/Starship.scss";

export class Vehicle extends Component {
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
      const data = await api.data.getVehicleInfo(id);
      const films = await api.data.getInfoNames("films", data.films);
      const characters = await api.data.getInfoNames("people", data.pilots);
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
        <div className="vehicle-container">
          <Loader />
        </div>
      );
    }
    return (
      <React.Fragment>
        <div className="vehicle-container row">
          <div className="container-vehicle-image col-lg-4 col-md-12 element-loaded">
            <img
              src={require(`../images/vehicles/${this.state.data.name}.jpg`)}
              alt={this.state.data.name}
            />
          </div>
          <div className="container-vehicle-info col-lg-8 col-md-12 element-loaded">
            <h1>{this.state.data.name}</h1>
            <div className="vehicle-info-box">
              <h4>Model:</h4>
              <p>{this.state.data.model}</p>
            </div>
            <div className="vehicle-info-box">
              <h4>Vehicle Class:</h4>
              <p>{this.state.data.vehicle_class}</p>
            </div>
            <div className="vehicle-info-box">
              <h4>Manufacturer:</h4>
              <p>{this.state.data.manufacturer}</p>
            </div>
            <div className="vehicle-info-box">
              <h4>Crew:</h4>
              <p>{this.state.data.crew}</p>
            </div>
            <div className="vehicle-info-box">
              <h4>Passengers:</h4>
              <p>{this.state.data.passengers}</p>
            </div>
            <div className="vehicle-info-box">
              <h4>Cargo Capacity:</h4>
              <p>
                {this.state.data.cargo_capacity === "unknown"
                  ? "Unknown"
                  : this.numberFormat(this.state.data.cargo_capacity)}
              </p>
            </div>
            <div className="vehicle-info-box">
              <h4>Cost in credits:</h4>
              <p>
                {this.state.data.cost_in_credits === "unknown"
                  ? "Unknown"
                  : this.numberFormat(this.state.data.cost_in_credits)}
              </p>
            </div>
            <div className="vehicle-info-box">
              <h4>Max speed:</h4>
              <p>{this.numberFormat(this.state.data.max_atmosphering_speed)}</p>
            </div>
            <div className="vehicle-info-box">
              <h4>Consumables:</h4>
              <p>
                {this.state.data.consumables === "unknown"
                  ? "Unknown"
                  : this.state.data.consumables}
              </p>
            </div>
            <div className="vehicle-info-box">
              <h4>Pilots:</h4>
              {this.state.characters.length === 0 ? (
                <p>Without Pilots</p>
              ) : (
                <Cards
                  items={this.state.characters}
                  folder="characters"
                  classCard="col-lg-3 col-md-4"
                  moreInfo={true}
                />
              )}
            </div>
            <div className="vehicle-info-box">
              <h4>Films:</h4>
              <Cards
                items={this.state.films}
                folder="films"
                classCard="col-lg-3 col-md-4"
                moreInfo={true}
              />
            </div>
            <Link to="/vehicles" className="btn btn-primary mt-3">
              Vehicles
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Vehicle;
