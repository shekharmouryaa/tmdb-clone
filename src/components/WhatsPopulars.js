import React, { useEffect, useState } from "react";
import useStore from "../Store/store";
import {  getPopularMovies,  getOnRent,  getPopularTvShows,  getInTheaters,} from "../API/api";
import "react-loading-skeleton/dist/skeleton.css";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import {} from "react/cjs/react.production.min";
import LoadingSkeleton from "./LoadingSkeleton";
import VideoPlayer from "./VideoPlayer"
import { useNavigate } from "react-router-dom";
// import { useNavigate  } from "react-router-dom";

export default function WhatsPopulars() {
  const setLoading = useStore((state) => state.setLoading);
  const pagenumber = useStore((state) => state.pagenumber);
  const populars = useStore((state) => state.populars);
  const setPopulars = useStore((state) => state.setPopulars);
  const setMediaId = useStore((state) => state.setMediaId);

  const [active, setActive] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getPopularMovies(pagenumber).then((movies) =>
      setPopulars(movies.data.results)
    );
    setLoading();
    setActive("Streaming");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagenumber]);

  const getMoviesData = () => {
    getPopularMovies(pagenumber).then((mov) => setPopulars(mov.data.results));
    setActive("Streaming");
  };
  const getTvData = () => {
    getPopularTvShows(pagenumber).then((tv) => setPopulars(tv.data.results));
    setActive("tv");
  };
  const getRentData = () => {
    getOnRent(pagenumber).then((items) => setPopulars(items.data.results));
    setActive("rent");
  };
  const getInTheatersData = () => {
    getInTheaters(pagenumber).then((mov) => setPopulars(mov.data.results));
    setActive("theater");
  };
  const showMediaDetails = (id) => {
    setMediaId(id)
    localStorage.setItem('movieid',id);
    navigate("/details")
  };
  return (
    <>
      {
        <div className="container-fluid main-content ">
          <div className="column_header">
            <div className="HeadingContainer">
              <span className="section-title">What's Popular</span>
            </div>
            <div className="selector_wrapper  ">
              <div
                className={`anchor ${
                  active === "Streaming" ? "selected" : ""
                }`}
                onClick={() => getMoviesData()}
              >
                Streaming
              </div>

              <div
                className={`anchor ${active === "tv" ? "selected" : ""}`}
                onClick={() => getTvData()}
              >
                On TV
              </div>

              <div
                className={`anchor ${active === "rent" ? "selected" : ""}`}
                onClick={() => getRentData()}
              >
                For Rent
              </div>
              <div
                className={`anchor ${active === "theater" ? "selected" : ""}`}
                onClick={() => getInTheatersData()}
              >
                In Theaters
              </div>
            </div>
          </div>
          <div className="card-horizontal scroller_wrap ">
            {populars.length
              ? populars.sort().map((moviesobject, i) => (
                  <div key={i} >
                    <div className="vertical-card card text-white m-2" 
                    
                    >
                      <div onClick={() => showMediaDetails(moviesobject.id)}>
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
                          {moviesobject.name || moviesobject.title}
                        </div>
                        <div className="item-score">
                          {moviesobject.release_date ||
                            moviesobject.first_air_date}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : <div style={{ display: "flex"}}>
              <LoadingSkeleton/>
              </div>}
          </div>
          <VideoPlayer/>
        </div>
      }
    </>
  );
}
