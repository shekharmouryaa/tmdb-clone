import React, { useEffect, useState } from "react";
import useStore from "../Store/store";
import { getTrendingDay, getTrendingWeek } from "../API/api";
import "react-loading-skeleton/dist/skeleton.css";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import {} from "react/cjs/react.production.min";
import LoadingSkeleton from "./LoadingSkeleton";

export default function Trending() {
  const setLoading = useStore((state) => state.setLoading);
  const pagenumber = useStore((state) => state.pagenumber);

  const trending = useStore((state) => state.trending);
  const setTrending = useStore((state) => state.setTrending);

  const [active, setActive] = useState("");

  useEffect(() => {
    getTrendingDay(pagenumber).then((movies) =>
      setTrending(trending.concat(movies.data.results))
    );
    setLoading();
    setActive("today");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagenumber]);

  const getTrendingDayData = () => {
    getTrendingDay(pagenumber).then((items) => setTrending(items.data.results));
    setActive("today");
  };
  const getTrendingWeekData = () => {
    getTrendingWeek(pagenumber).then((items) =>
      setTrending(items.data.results)
    );
    setActive("week");
  };

  return (
    <>
      {
        <div className="container-fluid main-content">
          <div className="column_header">
            <div className="HeadingContainer">
              <span className="section-title">Trending</span>
            </div>
            <div className="selector_wrapper ">
              <div
                className={`anchor ${active === "today" ? "selected" : null}`}
                onClick={() => getTrendingDayData()}
              >
                Today
              </div>

              <div
                className={`anchor ${active === "week" ? "selected" : null}`}
                onClick={() => getTrendingWeekData()}
              >
                This Week
              </div>
            </div>
          </div>
          <div className="card-horizontal scroller_wrap should_fade">
            {trending.length ? (
              trending.sort().map((moviesobject, i) => (
                <>
                  <div className="vertical-card card text-white m-2" key={i}>
                    <div>
                      <img
                          className="movie-card img-fluid"
                          src={`https://image.tmdb.org/t/p/original${moviesobject.poster_path}`}
                          alt="poster"
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
                        {moviesobject.title || moviesobject.name}
                      </div>
                      <div className="item-score">
                        {moviesobject.release_date ||
                          moviesobject.first_air_date}
                      </div>
                    </div>
                  </div>
                </>
              ))
            ) : (
              <div style={{ display: "flex" }}>
                <LoadingSkeleton />
              </div>
            )}
          </div>
        </div>
      }
    </>
  );
}
