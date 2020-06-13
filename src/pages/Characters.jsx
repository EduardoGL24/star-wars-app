import React, { Component } from 'react'
import api from '../api'
import './styles/Characters.scss';
import Cards from '../components/Cards';

export class Characters extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          loading: false,
          items: []
        };
      }

      componentDidMount() {
        this.fetchData();
      }

      fetchData = async () => {
        this.setState({ loading: true, error: null });
        try {
          const data = await api.data.people(1);
          this.setState({
            loading: false,
            items: data.results,
          });

        } catch (error) {
          console.log(error);
        }
      }

    render() {
      console.log(this.state.items)
        return (
            <React.Fragment>
              <div className="characters-container">
                <div className="characters-search-bar mb-5">
                <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                </div>
                <Cards items={this.state.items} images="characters"/>
              </div>
            </React.Fragment>
        )
    }
}

export default Characters
