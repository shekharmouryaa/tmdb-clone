import React from "react";
import useStore from "../../Store/store";
import FreeToWatch from "../FreeToWatch/Free to Watch";
import Trending from "../Trending/Trending";
import WhatsPopulars from "../MostPopulars/WhatsPopulars";

export default function HomeContent() {
  console.count("banner")
  // const currenttext = useStore((state) => state.currenttext);
  // const setCurrenttext = useStore((state) => state.setCurrenttext);
  const populars = useStore((state) => state.populars);

  const backgroundImage = populars.map((img) => img.backdrop_path)[2
    // Math.floor(Math.random() * populars.length)
  ];
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("This feature is comimg soon");
  }
  return (
    <div className="page-layout container-fluid ">
      <div
        className="inner_content banner"
        style={{
          backgroundImage: `linear-gradient(to right,
            rgba(3, 84, 114, 0.8),rgba(4, 88, 116, 0.7)),
    url("https://image.tmdb.org/t/p/original${backgroundImage}")`,
        }}
      >
        <div className="column_wrapper">
          <div className="content_wrapper wrap">
            <div className="title">
              <h2>Welcome !</h2>
              <h3>
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
