import React, { Component } from "react";
import api from "../api";
import "./styles/Planets.scss";
import { Cards } from "../components/Cards";
import Loader from "../components/Loader";

export class Planets extends Component {
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
      const data = await api.data.getData("planets");
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
          <div className="planets-container">
            <Loader />
          </div>
        </React.Fragment>
      );
    }
    if (this.state.items.length > 0) {
      return (
        <React.Fragment>
          <div className="planets-container">
            <Cards
              items={this.state.items}
              folder="planets"
              classCard="col-lg-4 col-md-6"
            />
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Planets;
