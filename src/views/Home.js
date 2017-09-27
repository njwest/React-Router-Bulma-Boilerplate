import React from 'react';
import TopNav from '../components/TopNav'

export const Home = () => (
  <section className="hero is-primary is-fullheight">
    <div className="hero-head">
      <TopNav/>
    </div>
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">
          Home
        </h1>
        <h2 className="subtitle">
          Subtitle
        </h2>
      </div>
    </div>
  </section>
)
