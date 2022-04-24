/* eslint-disable no-dupe-keys */
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
  const[loading, setLoading] =  useState(false)

  useEffect(() => {
     if (mediaId){
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
  let Background, backdropimage;
  if(mediaDetails){
     Background = {
      backgroundImage:`linear-gradient(to right,
        rgba(3, 84, 114, 0.5),rgba(4, 88, 116, 0.75)),url(https://image.tmdb.org/t/p/original${mediaDetails.backdrop_path})`,
    }
    backdropimage = {
      backgroundImage:`url(https://image.tmdb.org/t/p/original${mediaDetails.backdrop_path})`
    }
  }
  return (
    <div className="container-fluid">
      <span  className="row backdrop_poster"
        style={Background}></span>
      <div className="media-content">
        {loading ? 
        <>
        <div className="poster-section">
          <div className="poster">
          <span  
          style={backdropimage}
          className="row mobile-back-poster"></span>
            <img 
              className="img-fluid"
              src={`https://image.tmdb.org/t/p/original${mediaDetails.poster_path}`}
              alt=""
            />
          <div className="streaming-platform"  onClick={() => showTrailer(mediaDetails.id)}>Play Trailer</div>
          </div>
        </div>
        <div className="info-section">
        <div className="media-title ">
            <h1 className="mediaName">
              {mediaDetails?.title}{" "}<span className="release_date">
                ({mediaDetails.release_date.substring( 0 , 4 )})
              </span>
            </h1>
            <h3 style={{cursor:"pointer"}}>Watch Trailer</h3>
          </div>
          <div className="media-genre-info">
            {mediaDetails.genres.map((gen, i) => (<span style={{marginLeft:"5px"}} key={i}>{gen.name}, </span>
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
         <h1>"Loading.."</h1> 
        }
         
      </div>
      <VideoPlayer/>
    </div>
  );
};
