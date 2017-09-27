import React, {Component} from 'react';
import {Link} from 'react-router-dom';

function toggleNav() {
  let nav = document.getElementById("nav-menu");
  let className = nav.getAttribute("class");
  if (className === "nav-right nav-menu") {
    nav.className = "nav-right nav-menu is-active";
  } else {
    nav.className = "nav-right nav-menu";
  }
}

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
          <span className="nav-toggle" onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="nav-right nav-menu" id="nav-menu">
            <a className="nav-item is-active">
              <Link to="/">
                Home
              </Link>
            </a>
            <a className="nav-item">
              <Link to="/code">
                Code
              </Link>
            </a>
            <a className="nav-item">
              <Link to="/about">
                About
              </Link>
            </a>
            <a className="nav-item">
              <Link to="/contact">
                Contact
              </Link>
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
