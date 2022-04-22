import React, { useEffect, useState } from "react";
import useStore from "../Store/store";
import { getFreeTvShow, getFreeMovies } from "../API/api";
import "react-loading-skeleton/dist/skeleton.css";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import {} from "react/cjs/react.production.min";
import LoadingSkeleton from "./LoadingSkeleton";
import { useNavigate } from "react-router-dom";

export default function FreeToWatch() {
  const setLoading = useStore((state) => state.setLoading);
  const pagenumber = useStore((state) => state.pagenumber);
  const freeContent = useStore((state) => state.freeContent);
  const setFreeContent = useStore((state) => state.setFreeContent);
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const setMediaId = useStore((state) => state.setMediaId);

  useEffect(() => {
    getFreeMovies(pagenumber).then((movies) =>
    setFreeContent(movies.data.results)
    );
    setLoading();
    setActive("movies");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagenumber]);

  const getMoviesData = () => {
    getFreeMovies(pagenumber).then((mov) => setFreeContent(mov.data.results));
    setActive("movies");
  };
  const getTvData = () => {
    getFreeTvShow(pagenumber).then((tv) => setFreeContent(tv.data.results));
    setActive("tv");
  };
  const showMediaDetails = (id) => {
    setMediaId(id)
    localStorage.setItem('movieid',id);
    navigate("/details")
  };

  return (
    <>
      {
        <div className="container-fluid main-content">
          <div className="column_header">
            <div className="HeadingContainer">
              <span className="section-title">Free To Watch</span>
            </div>
            <div className="selector_wrapper ">
              <div
                className={`anchor ${active === "movies" ? "selected" : null}`}
                onClick={() => getMoviesData()}
              >
                Movies
              </div>

              <div
                className={`anchor ${active === "tv" ? "selected" : null}`}
                onClick={() => getTvData()}
              >
                TV Shows
              </div>
            </div>
          </div>
          <div className="card-horizontal scroller_wrap should_fade">
            {freeContent.length
              ? freeContent.sort().map((moviesobject, i) => (
                  <div key={i}>
                    <div className="vertical-card card text-white m-2" >
                      <div onClick={()=>showMediaDetails(moviesobject.id)}>
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
              :<div style={{ display: "flex"}}>
              <LoadingSkeleton/>
              </div>}
          </div>
        </div>
      }
    </>
  );
}