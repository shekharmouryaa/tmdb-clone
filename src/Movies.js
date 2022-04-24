// import React, { useEffect } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import useStore from "../Store/store";
// import { getMovies, getTrailer } from "../API/api";
// import VideoPlayer from "./VideoPlayer";
// import CarouselSlider from "./CarouselSlider";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

// export default function Movies() {
//   const loading = useStore((state) => state.loading);
//   const setLoading = useStore((state) => state.setLoading);
//   const pagenumber = useStore((state) => state.pagenumber);
//   const setPagenumber = useStore((state) => state.setPagenumber);
//   const allMovies = useStore((state) => state.allMovies);
//   const setAllMovies = useStore((state) => state.setAllMovies);
//   const currenttext = useStore((state) => state.currenttext);
//   const setCurrenttext = useStore((state) => state.setCurrenttext);
//   const favouritelist = useStore((state) => state.favouritelist);
//   const setFavouritelist = useStore((state) => state.setFavouritelist);
//   const setTrailerKey = useStore((state) => state.setTrailerKey);
//   const openModal = useStore((state) => state.openModal);

//   useEffect(() => {
//     getMovies(pagenumber).then((movies) =>
//       setAllMovies(allMovies.concat(movies.data.results))
//     );
//     checkfavouritelist();
//     setLoading();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [pagenumber]);

//   let addtofavlist = (fav) => {
//     let oldData = JSON.parse(localStorage.getItem("addedmov") || "[]");
//     if (favouritelist.includes(fav.id)) {
//       oldData = oldData.filter((m) => m.id !== fav.id);
//     } else {
//       oldData.push(fav);
//     }
//     localStorage.setItem("addedmov", JSON.stringify(oldData));
//     console.log("old data", oldData);
//     checkfavouritelist();
//   };

//   let checkfavouritelist = () => {
//     let oldData = JSON.parse(localStorage.getItem("addedmov") || "[]");
//     let tempArray = oldData.map((mymovies) => mymovies.id);
//     setFavouritelist(tempArray);
//   };

//   let filtermovies;
//   if (loading) {
//     const updateMovies = () => {
//       filtermovies = allMovies.filter((item) => {
//         return item.original_title
//           .toLowerCase()
//           .includes(currenttext.toLowerCase());
//       });
//       console.log("filtermovies", filtermovies);
//     };
//     updateMovies();
//   }

//   const showTrailer = (id) => {
//     getTrailer(id).then((key) => setTrailerKey(key));
//     openModal();
//   };
//   return (
//     <div className="container-fluid main-content">
//       <form>
//         <input
//           className="form-control search-box"
//           type="search"
//           placeholder="Search Movies"
//           aria-label="Search"
//           value={currenttext}
//           onChange={(e) => setCurrenttext(e.target.value)}
//         />
//       </form>
//       <CarouselSlider />
//       {loading ? (
//         <InfiniteScroll
//           dataLength={filtermovies.length}
//           next={setPagenumber}
//           hasMore={true}
//           loader={
//             <>
//               <SkeletonTheme baseColor="#a8a8a8" highlightColor="#777">
//                 <div className="movie-list">
//                   {[...Array(24)].map((e, i) => (
//                     <span key={i} style={{ margin: "15px" }}>
//                       <Skeleton duration={2} direction="ltr" height={180} />
//                     </span>
//                   ))}
//                 </div>
//               </SkeletonTheme>
//             </>
//           }
//         >
//           <div className="movie-list">
//             {filtermovies.map((moviesobject, i) => (
//               <div className="card text-white m-1" key={i}>
//                 <img
//                   className="movie-card img-fluid"
//                   src={`https://image.tmdb.org/t/p/original${moviesobject.backdrop_path}`}
//                   alt=""
//                 />
//                 <div className="card-img-overlay card-texts">
//                   <span className="card-title">
//                     {moviesobject.original_title}
//                   </span>
//                   <div>
//                     {
//                       <>
//                         <span
//                           className="fav-icon"
//                           onClick={() => addtofavlist(moviesobject)}
//                         >
//                           {favouritelist.includes(moviesobject.id)
//                             ? "❤️"
//                             : "🤍"}
//                         </span>
//                         <span className="trailer-icon">
//                           <img
//                             className="fav-icon"
//                             width={"60px"}
//                             src="\assets\trailer.png"
//                             alt="icon"
//                             onClick={() => showTrailer(moviesobject.id)}
//                           />
//                         </span>
//                       </>
//                     }
//                   </div>
//                 </div>
//               </div>
//             ))}
//             <VideoPlayer />
//           </div>
//         </InfiniteScroll>
//       ) : null}
//     </div>
//   );
// }
