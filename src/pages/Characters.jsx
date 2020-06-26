import React, { Component } from "react";
import api from "../api";
import "./styles/Characters.scss";
import { Cards } from "../components/Cards";
import Loader from "../components/Loader";

export class Characters extends Component {
  state = {
    error: null,
    loading: true,
    page: 1,
    items: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.data.getCharacters();
      this.setState({
        loading: false,
        items: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    if (this.state.loading === true) {
      return (
        <React.Fragment>
          <div className="characters-container">
            <Loader />
          </div>
        </React.Fragment>
      );
    }
    if (this.state.items.length > 0) {
      return (
        <React.Fragment>
          <div className="characters-container">
            <Cards items={this.state.items} folder="characters" />
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Characters;
