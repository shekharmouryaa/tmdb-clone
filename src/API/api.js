import axios from "axios";

const BASE_URL = `https://api.themoviedb.org/3/`;
const API_KEY = "bdd243ea847239dc0799805e63e189f0";
axios.defaults.baseURL = BASE_URL;
axios.defaults.customHeaders = true;
axios.defaults.defaultErrorHandler = true;

export const getTopRatedMovies = async  () => {
  const data = await axios.get("/movie/top_rated/", {
      params: {
      api_key: API_KEY,
      language: "en-US",
      page: 2,
    },
  })
  return data
};

export const getMovies = async  (pagenumber) => {
  const data = await axios.get("/movie/popular/", {
      params: {
      api_key: API_KEY,
      language: "en-US",
      page: pagenumber,
    },
  })
  return data
};
export const getTvShow = async  (pagenumber) => {
  const data = await axios.get("/tv/popular/", {
      params: {
      api_key: API_KEY,
      language: "en-US",
      page: pagenumber,
    },
  })
  return data
};
//&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=rent
export const getOnRent = async  (pagenumber) => {
  const data = await axios.get("/discover/movie/", {
      params: {
      api_key: API_KEY,
      language: "en-US",
      page: pagenumber,
      sort_by: "popularity",
      include_video: "false",
      with_watch_monetization_types:"rent"
    },
  })
  return data
};
export const getTrailer = async  (movieid) => {
  const data = await axios.get(`/movie/${movieid}/videos`, {
      params: {
      api_key: API_KEY,
      language: "en-US",
    },
  })
  return data.data.results.filter(key => key.type === "Trailer")[0].key
};

