/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect }  from "react";
import { getMediaDetails } from "../API/api";
import useStore from "../Store/store";

export const MediaDetails = () => {

  const mediaId = useStore((state) => state.mediaId);
  const mediaDetails = useStore((state) => state.mediaDetails);
  const setMediaDetails = useStore((state) => state.setMediaDetails);

  console.log("media id", mediaId );

  useEffect(()=>{
    console.log("Effect Called")
    getMediaDetails(mediaId).then((items) => setMediaDetails(items.data));
  },[])

  console.log("mediaDetails", mediaDetails);
  return (
    <div class="container-fluid">
      <div
        className="row"
        style={{
          backgroundImage: `linear-gradient(to right,
            rgba(90, 10, 7, 0.82),rgba(94, 8, 6, 0.75)),
    url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg")`,
        }}
      >
        <div className="col-3 poster-section">
          <div className="poster">
            <img
              className="img-fluid"
              src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg"
              alt=""
            />
          </div>
          <div className="streaming-platform">Watch Now</div>
        </div>
        <div className="col-9 info-section">
          <div className="media-title">
            <h1>Watch Trailer</h1>
            <h2>{mediaDetails.title} <span className="release_date">({mediaDetails.release_date})</span>
            </h2>
          </div>
          <div className="mdeia-genre-info">Media Genre info</div>
          <div className="user-section">User Section</div>
          <div className="overview-section">Overview: {mediaDetails.overview}
          </div>
          <div className="media-credit">Media Created By</div>
        </div>
      </div>
    </div>
  );
};
