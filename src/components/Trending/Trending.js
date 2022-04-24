import React, { useEffect, useState } from "react";
import useStore from "../../Store/store";
import { getTrailer, getTrendingDay, getTrendingWeek } from "../../API/api";
import "react-loading-skeleton/dist/skeleton.css";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import {} from "react/cjs/react.production.min";
import LoadingSkeleton from "../../Utilty/LoadingSkeleton";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import image from '../../placeholder.png';
import { useNavigate } from "react-router-dom";



export default function Trending() {
  const setLoading = useStore((state) => state.setLoading);
  const pagenumber = useStore((state) => state.pagenumber);
  const trending = useStore((state) => state.trending);
  const setTrending = useStore((state) => state.setTrending);
  const setMediaId = useStore((state) => state.setMediaId);
  
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getTrendingDay(pagenumber).then((movies) =>
      setTrending(movies.data.results)
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
  const showMediaDetails = (id) => {
    setMediaId(id)
    localStorage.setItem('movieid', id);
    navigate(`/details/${id}`)
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
                <div  key={i}>
                  <div className="vertical-card card text-white m-2">
                  <div onClick={()=>showMediaDetails(moviesobject.id)}>
                    <LazyLoadImage
                        className="movie-card img-fluid"
                        width={150}
                        height={225}
                        alt={"poster"}
                        effect="blur"
                        src={moviesobject.poster_path ?  `https://image.tmdb.org/t/p/original${moviesobject.poster_path}`: image}
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
                </div>
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
