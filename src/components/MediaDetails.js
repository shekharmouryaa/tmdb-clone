/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect , useState } from "react";
import { getMediaDetails, getTrailer } from "../API/api";
import useStore from "../Store/store";
import VideoPlayer from "./VideoPlayer";

export const MediaDetails = () => {
  const mediaId = localStorage.getItem("movieid");
  const mediaDetails = useStore((state) => state.mediaDetails);
  const setMediaDetails = useStore((state) => state.setMediaDetails);
  const setTrailerKey = useStore((state) => state.setTrailerKey);
  const openModal = useStore((state) => state.openModal);

  console.log("Media", mediaDetails);
  useEffect(() => {
    getMediaDetails(mediaId).then((items) => {
      setMediaDetails(items.data);
  
    });
  }, []);

  const showTrailer = (id) => {
    getTrailer(id).then((key) => setTrailerKey(key));
    openModal();
  };

  return (
    <div className="container-fluid wrap">
      <div
        className="row"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(3, 10, 7, 0.82),rgba(4, 8, 6, 0.75))`,
        }}
      >
        {mediaDetails.length ? 
        <>
          <div className="media-title col-12 info-section">
            <h1>
              {mediaDetails?.title}{" "}
              <span className="release_date">
                ({mediaDetails.release_date})
              </span>{" "}
            </h1>
            <h3 style={{cursor:"pointer"}} onClick={() => showTrailer(mediaDetails.id)}>Watch Trailer</h3>
          </div>

        <div className="col-sm-3 poster-section">
          <div className="poster">
            <img 
              className="img-fluid"
              src={`https://image.tmdb.org/t/p/original${mediaDetails.poster_path}`}
              alt=""
            />
          </div>
          <div className="streaming-platform">Watch Now</div>
        </div>
        <div className="col-sm-9 info-section">
          <div className="mdeia-genre-info">
            {mediaDetails.genres.map((gen, i) => (
              <span key={i}> '{gen.name}' </span>
            ))}
          </div>

          <div className="user-section">
            <p>User Rating : {mediaDetails.vote_average}/10 </p>
          </div>
          <div className="overview-section">
            Overview: {mediaDetails.overview}
          </div>
        </div>
        </> : 
         <h1>"Loading.."
         </h1> 
        }
         
      </div>
      <VideoPlayer/>
    </div>
  );
};
