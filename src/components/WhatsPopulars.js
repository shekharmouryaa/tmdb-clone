import React, { useEffect,useState } from "react";
import useStore from "../Store/store";
import { getMovies, getOnRent, getTvShow } from "../API/api";
import "react-loading-skeleton/dist/skeleton.css";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import {  } from "react/cjs/react.production.min";

export default function WhatsPopulars() {
  const loading = useStore((state) => state.loading);
  const setLoading = useStore((state) => state.setLoading);
  const pagenumber = useStore((state) => state.pagenumber);
  const currenttext = useStore((state) => state.currenttext);
  const setCurrenttext = useStore((state) => state.setCurrenttext);
  const populars = useStore((state) => state.populars);
  const setPopulars = useStore((state) => state.setPopulars);
  
  const [active, setActive] = useState('')


  useEffect(() => {
    getMovies(pagenumber).then((movies) =>
      setPopulars(populars.concat(movies.data.results))
    );
    setLoading();
    setActive("movies")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagenumber]);
  
  const getMoviesData = () => {
    getMovies(pagenumber).then((tv) => setPopulars(tv.data.results));
    setActive("movies")
  };
  const getTvData = () => {
    getTvShow(pagenumber).then((tv) => setPopulars(tv.data.results));
    setActive("tv")
  };
  const getRentData = () => {
    getOnRent(pagenumber).then((tv) => setPopulars(tv.data.results));
    setActive("rent")
  };

  return (
    <>
      {
        <div className="container-fluid main-content">
          <section className="inner_content banner">
              <div className="column_wrapper">
                <div className="content_wrapper wrap">
                  <div className="title">
                    <h2 style={{fontSize:"48px", fontWeight:"600"}}>Welcome.</h2>
                    <h3 style={{fontSize:"32px", fontWeight:"600"}}>
                      Millions of movies, TV shows and people to discover.
                      Explore now.
                    </h3>
                  </div>

                  <div >
                        <form className="search" style={{display: 'flex',marginTop:"30px"}} >
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
          <div className="column_header">
            <div className="HeadingContainer">
              <span>What's Popular</span>
            </div>
            <div className="selector_wrapper ">
              <div className={`anchor ${active==="movies" ? "selected" :null}`} onClick={() =>getMoviesData()}>
                Streaming
              </div>

              <div className={`anchor ${active==="tv" ? "selected" :null}`} onClick={() => getTvData()}>
                On TV
              </div>

              <div className={`anchor ${active==="rent" ? "selected" :null}`} onClick={() => getRentData()}>
                For Rent
              </div>

              <div className={`anchor ${active==="Theaters" ? "selected" :null}`}>
                In Theaters
              </div>
            </div>
          </div>
          <div className="card-horizontal scroller_wrap should_fade">
            {loading
              ? populars.sort().map((moviesobject, i) => (
                  <>
                    <div className="vertical-card card text-white m-2" key={i}>
                      <div>
                        <img
                          className="movie-card img-fluid"
                          src={`https://image.tmdb.org/t/p/original${moviesobject.poster_path}`}
                          alt=""
                        />
                      </div>
                      <div className="content-details">
                        <span className="circular-progress-bar">
                          <CircularProgressBar
                            percent={moviesobject.vote_average * 10}
                            linearGradient={["#18cdb5", "#1fb76d"]}
                            colorSlice={"#081c22"}
                            colorCircle={"#081c22"}
                            fontColor={"#fff"}
                            fontSize={"1.8rem"}
                            fontWeight={400}
                            size={40}
                            cut={0}
                            rotation={-90}
                            opacity={10}
                            fill={"#032541"}
                            unit={"%"}
                            textPosition={"0.35em"}
                          />
                        </span>
                        <div className="item-title">
                          {moviesobject.title}
                        </div>
                        <div className="item-score">
                          {moviesobject.release_date}
                        </div>
                      </div>
                    </div>
                  </>
                ))
              : null}
          </div>
        </div>
      }
    </>
  );
}
