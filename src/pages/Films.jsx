import React, { Component } from "react";
import api from "../api";
import "./styles/Films.scss";
import { Cards } from "../components/Cards";
import Loader from "../components/Loader";

export class Films extends Component {
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
      const data = await api.data.getData("films");
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
          <div className="films-container">
            <Loader />
          </div>
        </React.Fragment>
      );
    }
    if (this.state.items.length > 0) {
      return (
        <React.Fragment>
          <div className="films-container">
            <Cards
              items={this.state.items}
              folder="films"
              classCard="col-lg-3 col-md-4"
            />
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Films;
