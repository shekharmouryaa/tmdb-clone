import React from "react";
import useStore from "../Store/store";
import FreeToWatch from "./Free to Watch";
import Trending from "./Trending";
import WhatsPopulars from "./WhatsPopulars";

export default function HomeContent() {
  // const currenttext = useStore((state) => state.currenttext);
  // const setCurrenttext = useStore((state) => state.setCurrenttext);
  const populars = useStore((state) => state.populars);

  const backgroundImage = populars.map((img) => img.backdrop_path)[
    Math.floor(Math.random() * populars.length)
  ];
  console.log(backgroundImage);
  const handleSubmit = (e) => e.preventDefault();
  return (
    <div>
      <div
        className="inner_content banner"
        style={{
          backgroundImage: `linear-gradient(to right,
      rgba(3, 40, 68, 0.955),
      rgba(16, 67, 163, 0.438)),
    url("https://image.tmdb.org/t/p/original${backgroundImage}")`,
        }}
      >
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
                onSubmit={handleSubmit}
              >
                <input
                  className="form-control search-box"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  // value={currenttext}
                  // onChange={(e) => setCurrenttext(e.target.value)}
                />
                <button className="search-button">Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <WhatsPopulars />
      <FreeToWatch />
      <Trending />
    </div>
  );
}
