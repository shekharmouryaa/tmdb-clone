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
              <img height="20px" src="\assets\tmdb.svg" alt="logo" />
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
