/* eslint-disable no-dupe-keys */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from "react";
import { getMediaDetails, getTrailer } from "../API/api";
import useStore from "../Store/store";
import logo from '../youtube.svg'
import VideoPlayer from "./VideoPlayer";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";


export const MediaDetails = () => {
  const mediaId = localStorage.getItem("movieid");
  const mediaDetails = useStore((state) => state.mediaDetails);
  const setMediaDetails = useStore((state) => state.setMediaDetails);
  const setTrailerKey = useStore((state) => state.setTrailerKey);
  const openModal = useStore((state) => state.openModal);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (mediaId) {
      getMediaDetails(mediaId).then((items) => {
        setMediaDetails(items.data);
        setLoading(true)
      });
    }
  }, [mediaId]);

  const showTrailer = (id) => {
    getTrailer(id).then((key) => setTrailerKey(key));
    openModal();
  };
  let Background;
  if (mediaDetails) {
    Background = {
      backgroundImage: `linear-gradient(to right,
        rgba(3, 84, 114, 0.9),rgba(2, 66, 87, 0.7)),url(https://image.tmdb.org/t/p/original${mediaDetails.backdrop_path})`,
    }
  }
  return (
    <div className="container-fluid">
      <span className="row backdrop_poster"
        style={Background}></span>
      <div className="media-content">
        {loading ?
          <>
            <div className="poster-section">
              <div className="poster">
                <img
                  className="img-fluid"
                  src={`https://image.tmdb.org/t/p/original${mediaDetails.poster_path}`}
                  alt=""
                />
                <div className="streaming-platform" onClick={() => showTrailer(mediaDetails.id)}>
                  <img className="youtube-logo" src={logo} alt="logo" />Play Trailer</div>

              </div>
            </div>
            <div className="info-section">
              <div className="media-title ">
                <h1 className="mediaName">
                  {mediaDetails?.title}{" "}<span className="release-date">
                    ({mediaDetails.release_date.substring(0, 4)})
                  </span>
                </h1>

              </div>
              <div className="media-genre-info">
                {mediaDetails.genres.map((gen, i) => (<span style={{ marginLeft: "5px" }} key={i}>{gen.name}, </span>
                ))}
                <span style={{ margin: "10px" }}>{" "}{mediaDetails.runtime}Minutes</span>
              </div>

              <div className="user-section">
                    <div>
                    <CircularProgressBar
                      className="circular-progressBar"
                      percent={mediaDetails.vote_average * 10}
                      linearGradient={["#18cdb5", "#1fb76d"]}
                      colorSlice={"#091c22"}
                      colorCircle={"#091c22"}
                      fontColor={"#fff"}
                      fontSize={"1.8rem"}
                      fontWeight={400}
                      size={60}
                      cut={0}
                      rotation={-90}
                      opacity={10}
                      fill={"#032541"}
                      unit={"%"}
                      textPosition={"0.35em"}
                    />
                    </div>
                    <span className="score">User Score</span>
                    <div className="user-account">
                      <span className="user-action">🤍</span>
                      <span className="user-action">🤍</span>
                      <span className="user-action">🤍</span>
                      <span className="user-action">🤍</span>
                    </div>

              </div>
              <p className='tagline'> {mediaDetails.tagline}</p>
              <div className="overview-section">
               <h5><b>Overview</b> </h5>
                 <span>{mediaDetails.overview}</span>                
              </div>
              <div className="production-section">
               <h5><b>Production By </b> </h5>
                 <span>{mediaDetails.production_companies.map((e,i)=><span key={i}>{e.name}</span> )}</span>                
              </div>
            </div>
          </> :
          <h1>"Loading.."</h1>
        }

      </div>
      <VideoPlayer />
    </div>
  );
};
