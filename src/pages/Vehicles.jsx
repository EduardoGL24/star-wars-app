import React, { Component } from "react";
import api from "../api";
import "./styles/Vehicles.scss";
import { Cards } from "../components/Cards";
import Loader from "../components/Loader";

export class Vehicles extends Component {
  state = {
    error: false,
    loading: true,
    items: [],
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: false });
    try {
      const data = await api.data.getData("vehicles");
      this.setState({
        loading: false,
        items: data,
        error: false,
      });
    } catch (error) {
      console.log(error);
      this.setState({ loading: false, error: true });
    }
  };

  render() {
    if (this.state.loading === true) {
      return (
        <React.Fragment>
          <div className="vehicles-container">
            <Loader />
          </div>
        </React.Fragment>
      );
    }
    if (this.state.items.length > 0) {
      return (
        <React.Fragment>
          <div className="vehicles-container">
            <Cards items={this.state.items} folder="vehicles" />
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Vehicles;
