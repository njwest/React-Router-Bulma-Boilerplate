import React, {Component} from 'react';
import logo from './hklogo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Home, About, Code, Contact } from './views';

import TopNav from './components/TopNav';



class App extends Component {
  render() {
    return (
      <Router>
        <section className="hero is-primary is-fullheight">
          <div className="hero-head">
            <TopNav/>
          </div>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>

          <div className="hero-foot">
            <nav className="tabs">
              <div className="container">
                <ul>
                  <li className="is-active">
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Modifiers</a>
                  </li>
                  <li>
                    <a>Grid</a>
                  </li>
                  <li>
                    <a>Elements</a>
                  </li>
                  <li>
                    <a>Components</a>
                  </li>
                  <li>
                    <a>Layout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
      </Router>
    );
  }
}

export default App;
