import React, { Component } from "react";
import api from "../api";
import "./styles/Characters.scss";
import { Cards } from "../components/Cards";
import Loader from "../components/Loader";

export class Characters extends Component {
  _isMounted = false;

  state = {
    error: false,
    loading: true,
    items: [],
  };

  componentDidMount() {
    this._isMounted = true;
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

  componentWillUnmount() {
    this._isMounted = false;
  }

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
