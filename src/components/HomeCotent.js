import React from "react";
import useStore from "../Store/store";
import FreeToWatch from "./Free to Watch";
import Trending from "./Trending";
import WhatsPopulars from "./WhatsPopulars";

export default function HomeCotent() {
  const currenttext = useStore((state) => state.currenttext);
  const setCurrenttext = useStore((state) => state.setCurrenttext);
  return (
    <div>
      <section className="inner_content banner">
        <div className="column_wrapper">
          <div className="content_wrapper wrap">
            <div className="title">
              <h2 style={{ fontSize: "48px", fontWeight: "600" }}>Welcome.</h2>
              <h3 style={{ fontSize: "32px", fontWeight: "600" }}>
                Millions of movies, TV shows and people to discover. Explore
                now.
              </h3>
            </div>

            <div>
              <form
                className="search"
                style={{ display: "flex", marginTop: "30px" }}
              >
                <input
                  className="form-control search-box"
                  type="search"
                  placeholder="Search for a movie, tv show, person......"
                  aria-label="Search"
                  value={currenttext}
                  onChange={(e) => setCurrenttext(e.target.value)}
                />
                <button className="search-button">Search</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Trending />
      <WhatsPopulars />
      <FreeToWatch />
    </div>
  );
}
