/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import { getMediaDetails, getTrailer } from "../API/api";
import useStore from "../Store/store";
import logo from '../youtube.svg'
import VideoPlayer from "./VideoPlayer";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import { AiOutlineUnorderedList, AiFillStar } from "react-icons/ai";
import { MdFavorite, MdBookmark } from "react-icons/md";

export const MediaDetails = () => {
  const mediaId = localStorage.getItem("movieid");
  const mediaDetails = useStore((state) => state.mediaDetails);
  const setMediaDetails = useStore((state) => state.setMediaDetails);
  const setTrailerKey = useStore((state) => state.setTrailerKey);
  const openModal = useStore((state) => state.openModal);
  const [loading, setLoading] = useState(false)
  const [favouritelist, setFavouritelist] = useState([])

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

  useEffect(() => {
    checkfavouritelist();
  }, [])
  const addtofavlist = (fav) => {
    let oldData = JSON.parse(localStorage.getItem("addedmov") || "[]");
    if (favouritelist.includes(fav.id)) {
      oldData = oldData.filter((m) => m.id !== fav.id);
    } else {
      oldData.push(fav);
    }
    localStorage.setItem("addedmov", JSON.stringify(oldData));
    checkfavouritelist();
  };
  console.log("favouritelist", favouritelist);

  let checkfavouritelist = () => {
    let oldData = JSON.parse(localStorage.getItem("addedmov") || "[]");
    let tempArray = oldData.map((mymovies) => mymovies.id);
    setFavouritelist(tempArray);
  };
  let Background;
  if (mediaDetails) {
    Background = {
      backgroundImage: `linear-gradient(to right,
        rgba(3, 84, 114, 0.9),rgba(2, 66, 87, 0.9)),url(https://image.tmdb.org/t/p/original${mediaDetails.backdrop_path})`,
    }
  }
  return (
    <div style={Background} className="container-fluid backdrop_poster">
      <span className="row "
      ></span>
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
                  <img className="youtube-logo" src={logo} alt="logo" />Watch Trailer</div>

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
                    fontWeight={400}
                    fontSize={"1.5rem"}
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
                  <span className="user-action" onClick={() => addtofavlist(mediaDetails)}>
                    {favouritelist.includes(mediaDetails.id) ? <MdFavorite className='red-icon' /> : <MdFavorite />}
                  </span>
                  <span className="user-action"><AiOutlineUnorderedList /></span>
                  <span className="user-action"><MdBookmark /></span>
                  <span className="user-action"><AiFillStar /></span>
                </div>

              </div>
              <p className='tagline'> {mediaDetails.tagline}</p>
              <div className="overview-section">
                <h5><b>Overview</b> </h5>
                <span>{mediaDetails.overview}</span>
              </div>
              <div className="production-section">
                <h5><b>Production By </b> </h5>
                <span>{mediaDetails.production_companies.map((e, i) => <span key={i}>{e.name},{" "}</span>)}</span>
              </div>
            </div>
          </> : null}

      </div>
      <VideoPlayer />
    </div>
  );
};
