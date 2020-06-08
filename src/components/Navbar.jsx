import React, { Component } from 'react'
import './styles/Navbar.scss';

export class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar row">
                    <div className="col-md-2">
                        <a className="navbar-brand" href="#">
                            <img src={require('../images/logo.png')} width="200" height="auto" alt="" loading="lazy"/>
                        </a>
                    </div>
                    <div className="col-md-10 navbar-container-items">
                        <ul className="navbar-list">
                            <li className="navbar-item">
                                <a className="nav-link" href="#">Home</a>
                                <img className="navbar-item-lightsaber" src={require('../images/sable.png')} alt=""/>
                            </li>
                            <li className="navbar-item">
                                <a className="nav-link" href="#">Personajes</a>
                                <img className="navbar-item-lightsaber" src={require('../images/sable.png')} alt=""/>
                            </li>
                            <li className="navbar-item">
                                <a class="nav-link" href="#">Peliculas</a>
                                <img className="navbar-item-lightsaber" src={require('../images/sable.png')} alt=""/>
                            </li>
                            <li className="navbar-item">
                                <a class="nav-link" href="#">Naves</a>
                                <img className="navbar-item-lightsaber" src={require('../images/sable.png')} alt=""/>
                            </li>
                            <li className="navbar-item">
                                <a class="nav-link" href="#">Vehiculos</a>
                                <img className="navbar-item-lightsaber" src={require('../images/sable.png')} alt=""/>
                            </li>
                            <li className="navbar-item">
                                <a class="nav-link" href="#">Especies</a>
                                <img className="navbar-item-lightsaber" src={require('../images/sable.png')} alt=""/>
                            </li>
                            <li className="navbar-item">
                                <a class="nav-link" href="#">Planetas</a>
                                <img className="navbar-item-lightsaber" src={require('../images/sable.png')} alt=""/>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default Navbar