import React, { Component } from "react";
import api from "../api";
import "./styles/Characters.scss";
import { Cards } from "../components/Cards";
import Loader from "../components/Loader";

export class Characters extends Component {
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
      const data = await api.data.getData("people");
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
          <div className="characters-container">
            <Loader />
          </div>
        </React.Fragment>
      );
    }
    if (this.state.items.length > 80) {
      return (
        <React.Fragment>
          <div className="characters-container">
            <Cards
              items={this.state.items}
              folder="characters"
              classCard="col-lg-3 col-md-4"
            />
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Characters;
