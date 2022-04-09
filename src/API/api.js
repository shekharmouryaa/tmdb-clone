import axios from "axios";

const BASE_URL = `https://api.themoviedb.org/3/`;
const API_KEY = "bdd243ea847239dc0799805e63e189f0";
axios.defaults.baseURL = BASE_URL;
axios.defaults.customHeaders = true;
axios.defaults.defaultErrorHandler = true;


export const getTrendingDay = async  () => {
  const data = await axios.get('trending/all/day', {
      params: {
      api_key: API_KEY,
      language: "hi-IN",
    },
  })
  return data
};

export const getTrendingWeek = async  () => {
  const data = await axios.get('trending/all/week', {
      params: {
      api_key: API_KEY,
    },
  })
  return data
};

export const getInTheaters= async  () => {
  const data = await axios.get('/movie/now_playing/', {
      params: {
      api_key: API_KEY,
    },
  })
  return data
};

export const getTopRatedMovies = async  () => {
  const data = await axios.get("", {
      params: {
      api_key: API_KEY,
      language: "en-US",
      page: 2,
    },
  })
  return data
};

export const getPopularMovies = async  (pagenumber) => {
  const data = await axios.get("/movie/popular", {
      params: {
      api_key: API_KEY,
      language: "en-US",
      page: pagenumber,
    },
  })
  return data
};
export const getPopularTvShows = async  (pagenumber) => {
  const data = await axios.get("/tv/popular", {
      params: {
      api_key: API_KEY,
      language: "en-US",
      page: pagenumber,
    },
  })
  return data
};
export const getFreeMovies = async  (pagenumber) => {
  const data = await axios.get("/discover/movie/", {
    params: {
    api_key: API_KEY,
    language: "en-US",
    sort_by:"vote_count.desc",
    page: pagenumber,
    include_video: "false",
    include_adult:"false",
    with_watch_monetization_types:"free",
  },
  })
  return data
};
export const getFreeTvShow = async  (pagenumber) => {
  const data = await axios.get("/discover/tv/", {
    params: {
    api_key: API_KEY,
    language: "en-US",
    sort_by:"vote_count.desc",
    page: pagenumber,
    include_video: "false",
    include_adult:"false",
    with_watch_monetization_types:"free",
  },
  })
  return data
};
export const getOnRent = async  (pagenumber) => {
  const data = await axios.get("/discover/movie/", {
      params: {
      api_key: API_KEY,
      language: "en-US",
      sort_by:"vote_count.desc",
      page: pagenumber,
      include_video: "false",
      include_adult:"false",
      with_watch_monetization_types:"rent",
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


