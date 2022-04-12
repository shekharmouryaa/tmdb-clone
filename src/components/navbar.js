/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Navbar() {
  return (
    <header>
      <div className="container-fluid content">
        <div className="nav-menu">
          <div className="submenu-left">
          <span>
            <a to="/">
              <img height="20px" 
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="logo" />
            </a>
          </span>
          <span className="nav-link">
          <a to="/" className="link">
              Movies
            </a>
            <a to="/" className="link">
              TV Shows
            </a>
            <a to="/" className="link">
              More
            </a>
          </span>
           
          </div>
          <div className="submenu-right">
            <a
              to="/"
              className="link"
              style={{
                border: "0.5px solid white",
                borderRadius: "5px",
                padding: "3px",
              }}
            >
              EN
            </a>
            <a to="/" className="link">
              Login
            </a>
            <a to="/" className="link">
              Join TMDB
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
