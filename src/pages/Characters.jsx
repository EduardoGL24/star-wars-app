import React, { Component } from 'react'
import api from '../api'
import './styles/Characters.scss';
import Cards from '../components/Cards';

export class Characters extends Component {
      state = {
          error: null,
          loading: false,
          page: 1,
          items: []
        }

      componentDidMount() {
        this.fetchData();
      }

      fetchData = async () => {
        this.setState({ loading: true, error: null });
        console.log(this.state.page);
        try {
          const data = await api.data.people(this.state.page);
          this.setState({
            loading: false,
            items: data.results,
          });

        } catch (error) {
          console.log(error);
        }
      }

      nextPageImages(){
        const {page} = this.state;
        this.setState({ page: page + 1 },
          () => this.fetchData())
      }

      previousPageImages(){
        const {page} = this.state;
        this.setState({page: page - 1 },
          () => this.fetchData())
      }

    render() {
      console.log(this.state.items)
        return (
            <React.Fragment>
              <div id="startPage" className="characters-container">
                <div className="characters-search-bar mb-5">
                  <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                </div>
                <div className="charters-pagination">
                <button onClick={() => this.previousPageImages()} className="btn btn-primary">Anterior</button>
                <button onClick={() => this.nextPageImages()} className="btn btn-primary">Siguiente</button>
              </div>
                <Cards items={this.state.items} images="characters"/>
              </div>
            </React.Fragment>
        )
    }
}

export default Characters
