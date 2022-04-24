import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect } from "react";
import useStore from "../Store/store";
import { getTopRatedMovies } from "../API/api";

export default function CarouselSlider() {
  const topRatedMovies = useStore((state) => state.topRatedMovies);
  const setTopRatedMovies = useStore((state) => state.setTopRatedMovies);

  useEffect(() => {
    getTopRatedMovies().then((movies) =>
    setTopRatedMovies(movies.data.results)
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const responsive = {
      desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 480 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
    },
  };

  return (
    <div style={{maxWidth:"1300px", margin:"auto", padding:"20px 30px" }}>
    <h1 style={{textAlign: "center", padding: "10px",color: "#036f90"}}>Top Rated Movies</h1>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={500}
        keyBoardControl={true}
        customTransition="all 0.5"
        transitionDuration={2000}
        containerClass="carousel-container"
        dotListClass=""
        itemClass="carousel-item-padding-40-px"
        infinite={true}
      >
        {topRatedMovies.map((moviesobject, i) => (
            <div className="card text-white m-1" key={i}>
              <img
                className="movie-card img-fluid"
                src={`https://image.tmdb.org/t/p/original${moviesobject.backdrop_path}`}
                alt=""
              />
              <div className="card-img-overlay card-texts">
                <span className="card-title">
                  {moviesobject.title}
                </span>
                <div></div>
              </div>
            </div>
        ))}
      </Carousel>
    </div>
  );
}
