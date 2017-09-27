import React, {Component} from 'react';
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
          <Route path="/code" component={Code}/>
          <Route path="/contact" component={Contact}/>
        </section>
      </Router>
    );
  }
}

export default App;
