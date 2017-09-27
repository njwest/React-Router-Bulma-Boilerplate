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
              <img src="images/bulma-type-white.png" alt="Nick West"/>
            </a>
          </div>
          <span className="nav-toggle" onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="nav-right nav-menu" id="nav-menu">
              <Link to="/" className="nav-item">
                Home
              </Link>
              <Link to="/code" className="nav-item">
                Code
              </Link>
              <Link to="/about" className="nav-item">
                About
              </Link>
              <Link to="/contact" className="nav-item">
                Contact
              </Link>
            <span className="nav-item">
              <a className="button is-black is-inverted">
                <span className="icon">
                  <i className="fa fa-github"></i>
                </span>
                <span>Github</span>
              </a>
            </span>
          </div>
        </div>
      </header>
    )
  }
}
