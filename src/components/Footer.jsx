import React, { Component } from "react";
import "./styles/Footer.scss";

export class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer-container row">
          <div className="col-xs-12 col-md-6">
            <h4>Tecnologías</h4>
            <div className="footer-items-container">
              <div className="footer-item">
                <img src={require("../images/react.png")} alt="" />
                <p>React</p>
              </div>
              <div className="footer-item">
                <img src={require("../images/javascript.png")} alt="" />
                <p>JS</p>
              </div>
              <div className="footer-item">
                <img src={require("../images/sass.png")} alt="" />
                <p>SASS</p>
              </div>
              <div className="footer-item" styles="width: 32px">
                <img src={require("../images/bootstrap.png")} alt="" />
                <p>Bootstrap</p>
              </div>
            </div>
          </div>
          <div className="footer-contact-container col-xs-12 col-md-6">
            <h4>Contacto</h4>
            <div className="contact-item-container">
              <img src={require("../images/whatsapp.png")} alt="" />
              <span>(55) 2394 9855</span>
            </div>
            <div className="contact-item-container">
              <img src={require("../images/linkedin.png")} alt="" />
              <span>Eduardo García López</span>
            </div>
            <div className="contact-item-container">
              <img src={require("../images/github.png")} alt="" />
              <span>eduardogl24</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
