import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <header>
        <div className="container-fluid">
          <div className="nav-title">
            <Link to="/"><img height="30px" src="\assets\tmdb.svg" alt="logo" /></Link>
            <Link to="/" className="link">Movies</Link>
            <Link to="/" className="link">TV Shows</Link>
            <Link to="/" className="link">More</Link>
            <Link to="/favouritelist" className="link">Login</Link>
          </div>
        </div>
      </header>
    );
  }
}
