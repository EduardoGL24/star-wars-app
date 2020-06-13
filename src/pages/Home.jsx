import React, { Component } from 'react'
import Typed from 'typed.js'
import './styles/Home.scss'
import { Link } from 'react-router-dom'

export class Home extends Component {

    componentDidMount(){
        const typed = new Typed('.clase', {
            strings: ['<i className="text-animated">personajes</i>', 
            '<i className="text-animated">peliculas</i>', 
            '<i className="text-animated">naves</i>', 
            '<i className="text-animated">vehiculos</i>', 
            '<i className="text-animated">especies</i>', 
            '<i className="text-animated">planetas</i>'],
            typeSpeed: 75,
            startDelay: 300,
            backSpeed: 75,
            backDelay: 1000,
            loop: true,
            contentType: 'html'
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className="home-container">
                    <div className="home-text-animation">
                        <h2>Conoce sobre <span className="clase"></span><br/> de Star Wars</h2>
                    </div>
                    <div className="home-text-description">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias maiores sit, repellat sed harum officiis </p>
                    </div>
                    <div className="home-button-container">
                        <Link className="btn-home" to="characters">¡Vamos!</Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home
