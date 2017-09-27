import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class TopNav extends Component {
  render() {
    return (
      <header className="nav">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item">
              <img src="images/bulma-type-white.png" alt="Logo"/>
            </a>
          </div>
          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="nav-right nav-menu">
            <a className="nav-item is-active">
              <Link to="/">
                Home
              </Link>
            </a>
            <a className="nav-item">
              Code
            </a>
            <a className="nav-item">
              Writing
            </a>
            <a className="nav-item">
              <Link to="/about">
                About
              </Link>
            </a>
            <a className="nav-item">
              Contact
            </a>
            <span className="nav-item">
              <a className="button is-primary is-inverted">
                <span className="icon">
                  <i className="fa fa-github"></i>
                </span>
                <span>Download CV</span>
              </a>
            </span>
          </div>
        </div>
      </header>
    )
  }
}
