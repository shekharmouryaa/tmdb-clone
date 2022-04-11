import React from "react";

export default function Footer() {
  return (
    <footer className="container-fluid">
      <div className="footer">
        <div className="footer-items ">
          <img width="100px" src="\assets\footer-logo.svg" alt="logo" />
          <p className='footer-btn'>join the community</p>
        </div>
        <div className="footer-items">
          <h3>COMMUNITY</h3>
          <p> Guidelines</p>
          <p> Discussions</p>
          <p> Leaderboard </p>
          <p> Twitter </p>
        </div>
        <div className="footer-items">
          <h3>LEGAL</h3>
          <p> Terms of Use</p>
          <p> API Terms of Use</p>
          <p> Support Forums </p>
        </div>
        <div className="footer-items">
          <h3>THE BASICS</h3>
          <p> About TMDB </p>
          <p> Contact Us </p>
          <p> Support Forums </p>
          <p> API </p>
          <p> System Status </p>
        </div>
      </div>
    </footer>
  );
}
