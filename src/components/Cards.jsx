import React, { Component } from 'react'

export class Cards extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card-columns">
                    {this.props.items.map(item => (
                        <div key={item.name} className="card">
                            <img src={require(`../images/${this.props.images}/${item.name}.jpg`)} className="card-img-top" alt={this.props.items.name}/>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}

export default Cards
