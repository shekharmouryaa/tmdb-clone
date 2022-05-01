import { useEffect } from "react";
import React from 'react'
import useStore from "../../Store/store";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import { AiOutlineUnorderedList, AiFillStar ,AiFillDelete } from "react-icons/ai";
import { MdFavorite, MdBookmark } from "react-icons/md";
export default function Favouritelist() {
    const genres = useStore(state => state.genres)
    const setgenres = useStore(state => state.setgenres)
    const currentgenre = useStore(state => state.currentgenre)
    const setcurrentgenre = useStore(state => state.setcurrentgenre)
    const newmovies = useStore(state => state.newmovies)
    const setnewmovies = useStore(state => state.setnewmovies)
    const currenttext = useStore(state => state.currenttext)
    const setCurrenttext = useStore(state => state.setCurrenttext)
    const loading = useStore(state => state.loading)
    const setLoading = useStore(state => state.setLoading)
    const setgenresid = useStore(state => state.setgenresid)

    useEffect(() => {
        let temparray = [];
        let localdata = JSON.parse(localStorage.getItem('addedmov') || '[]');
        setnewmovies(localdata)
    }, [])

 
    // let filtermovies = [];
    // if (loading) {
    //     filtermovies = newmovies.filter(item => item.original_title.toLowerCase().includes(currenttext.toLowerCase()));
    //     if (currentgenre !== "All Genres") {
    //         filtermovies = newmovies.filter((movieobject) => movieobject.genre_ids[0] === currentgenre)
    //     }
    // }

    // const activegenre = (genre) => {
    //     setcurrentgenre(genre)
    // }

    // const sortRatDesc = () => {
    //     let temp = newmovies;
    //     temp.sort((a, b) => b.vote_average - a.vote_average)
    //     setnewmovies(temp)
    // }
    // const sortRatAsc = () => {
    //     let temp = newmovies;
    //     temp.sort((a, b) => a.vote_average - b.vote_average)
    //     setnewmovies(temp)
    // }
    const deleteMovie = (id) => {
        let newarray = [];
        newarray = newmovies.filter((movieobject) => movieobject.id !== id)
        setnewmovies(newarray)
        localStorage.setItem('addedmov', JSON.stringify(newarray))
    }

    return (
        <div className="container-fluid main-content ">
            {/* <div className="row">
                <div className="col">
                    <form>
                        <input className="form-control search-box" type="search" placeholder="Search in list" aria-label="Search" value={currenttext} onChange={(e) => setCurrenttext(e.target.value)} />
                    </form>
                </div>
            </div> */}
            <div className="column_header">
                <div className="HeadingContainer">
                    <span className="section-title">My Favorites</span>
                </div>
                <div className="selector_wrapper  ">
                    <div
                        className={`anchor ${true ? "selected" : ""}`}
                    >
                        Movie
                    </div>
                    <div
                        className={`anchor ${"active" === "tv" ? "selected" : ""}`}
                    >
                        TV
                    </div>
                </div>
            </div>
            <div className="scroller_wrap">
                {newmovies.length
                    ? newmovies.sort().map((moviesobject, i) => (
                        <div className=" fav-list-card " key={i} >
                            <div className="details-card">
                                <div className="mediaImage">
                                    <LazyLoadImage
                                        className="fav-item-image"
                                        alt={"poster"}
                                        effect="blur"
                                        src={moviesobject.poster_path ? `https://image.tmdb.org/t/p/original${moviesobject.backdrop_path}` : "image"}
                                    />
                                </div>
                                <div className="content-details">
                                    <div className="userRating">
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
                                        <div className="media-title">
                                            {moviesobject.name || moviesobject.title}
                                        </div>
                                        <div className="media-release-date">
                                            {(moviesobject.release_date || moviesobject.first_air_date).replace(/(\d{4})-(\d{1,2})-(\d{1,2})/, function(match,y,m,d) { 
                return d + '-' + m + '-' + y;  
            })}
                                        </div>
                                    </div>
                                    <div className="overview-section">{moviesobject.overview}</div>
                                    <div>
                                        <div className="user-action-section">
                                            <span className="user-actions-items">
                                                <MdFavorite />
                                            </span>
                                            <span className="action-name" >Favorite</span>
                                            <span className="user-actions-items"> <AiOutlineUnorderedList />
                                            </span>
                                            <span className="action-name" >Add to List</span>
                                            <span className="user-actions-items"><AiFillStar />
                                            </span>
                                            <span className="action-name" >Add to List</span>
                                            <span className="user-actions-items" onClick={()=>deleteMovie(moviesobject.id)}><AiFillDelete/>
                                            </span>
                                            <span className="action-name" >Remove</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    : <div style={{ display: "flex" }}>
                        Loading...
                    </div>}
            </div>
        </div>
    )
}

// filtermovies.length > 0 ?
//     filtermovies.map((movieobject, i) => (
//         <img className="img-thumb"
//         src={`https://image.tmdb.org/t/p/original${movieobject.backdrop_path}`}
//          alt='thumb' />{ movieobject.original_title }))