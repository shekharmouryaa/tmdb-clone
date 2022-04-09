/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <header>
        <div className="container-fluid">
          <div className="nav-title">
            <a to="/"><img height="20px" src="\assets\tmdb.svg" alt="logo" /></a>
            <a to="/" className="link">Movies</a>
            <a to="/" className="link">TV Shows</a>
            <a to="/" className="link">More</a>
            <a to="/favouritelist" className="link">Login</a>
          </div>
        </div>
      </header>
    );
  }
}
