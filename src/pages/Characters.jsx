import React, { Component } from "react";
import api from "../api";
import "./styles/Characters.scss";
import { Cards } from "../components/Cards";

export class Characters extends Component {
  state = {
    error: null,
    loading: false,
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
    return (
      <React.Fragment>
        <div id="startPage" className="characters-container">
          <Cards items={this.state.items} folder="characters" />
        </div>
      </React.Fragment>
    );
  }
}

export default Characters;
