import { useEffect } from "react";
import React from 'react'
import useStore from "../../Store/store";

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

    useEffect ( () => {
        let temparray = [];       
        let localdata = JSON.parse(localStorage.getItem('addedmov') || '[]');
        let genredID = localdata.map((e) => e.genre_ids).flat().filter((value, index, self)=> self.indexOf(value) === index);;
        setgenresid(genredID)
        // localdata.forEach((movieobject) => {
        //     if (!temparray.includes(movieobject.genres[0])) {
        //         temparray.push(movieobject.genres[0])
        //     }
        // });
        setgenres(["All Genres"].concat(temparray))
        setnewmovies(localdata)
        setLoading(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    let filtermovies=[];
    if(loading){
        filtermovies = newmovies.filter(item =>  item.original_title.toLowerCase().includes(currenttext.toLowerCase()));
        if (currentgenre !== "All Genres") {
                filtermovies = newmovies.filter((movieobject) => movieobject.genre_ids[0] === currentgenre)
            }
    }

    const activegenre =(genre) => {
        setcurrentgenre(genre)
    }

    const sortRatDesc = () => {
        let temp = newmovies;
        temp.sort((a, b) => b.vote_average - a.vote_average)
        setnewmovies(temp)
    }
    const sortRatAsc = () => {
        let temp = newmovies;
        temp.sort((a, b) => a.vote_average - b.vote_average)
        setnewmovies(temp)
    }
    // const deleteMovie = (id) => {
    //     let newarray = [];
    //     newarray = newmovies.filter((movieobject) => movieobject.id !== id)
    //     setnewmovies(newarray)
    //     let genres = newarray.map((e) => e.genre_ids[0]).flat().filter((value, index, self)=> self.indexOf(value) === index);
    //     setgenres(["All Genres"].concat(genres))
    //     localStorage.setItem('addedmov', JSON.stringify(newarray))       
    // }

  return (
    <div>
                <div className="main container-fluid">
                    <div className="row" style={{"--bs-gutter-x":0}}>
                        <div className="col-md-3 ">
                            <ul className="list-group p-3">
                                { 
                                    genres.map((genreslist,i) => (
                                        currentgenre === genreslist ? <li className="list-group-item listitems" key={i}>{genreslist}</li> :
                                            <li className="list-group-item" key={i} onClick={() => activegenre(genreslist)}>{genreslist}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                <div>
                                    <form className="d-flex">
                                        <input className="form-control search-box" type="search" placeholder="Search Movies" aria-label="Search" value={currenttext} onChange={(e) => setCurrenttext(e.target.value)}/>
                                    </form>
                                </div>
                                <table className="table">
                                    <thead>
                                        <tr className='text-center'>
                                            <th scope="col">Title</th>
                                            <th scope="col">Genre</th>
                                            <th scope="col"><i className="fas fa-sort-up m-2 desc-btn" onClick={sortRatDesc} />Rating<i className="fas fa-sort-down m-2" onClick={sortRatAsc} /></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filtermovies.length>0 ?
                                            filtermovies.map((movieobject,i) => (
                                                <tr key={i}>
                                                    <td> <img className="img-thumb" src={`https://image.tmdb.org/t/p/original${movieobject.backdrop_path}`} alt='thumb' />{movieobject.original_title}</td>
                                                    {/* <td>{movieobject.genre_ids[0]}</td> */}
                                                    <td>{movieobject.vote_average}</td>
                                                    <td><button type="button" className="btn btn-danger" >Delete</button></td>
                                                </tr>
                                            )): <tr>No Movie Added to list</tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}