import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Cards extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card-columns">
                    {this.props.items.map(item => (
                        <div key={item.name} className="card">
                            <img src={require(`../images/${this.props.images}/${item.name}.jpg`)} className="card-img-top" alt={item.name}/>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <Link className="btn btn-outline-primary btn-block" to={`${this.props.images}/${item.name.replace(/ /g, "")}`}>Ver más</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}

export default Cards
