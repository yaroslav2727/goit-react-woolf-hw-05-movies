import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWZkNTU4ZjExYWMwZjBmODdjZmIxMmQwYzJhNzQ4OCIsInN1YiI6IjY2MWY4OWU4YTM5ZDBiMDE2MzU1OGM4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gcke1f6Y6QxhMeW1vKZN0Qi2tdpPIxlxLcN0PWMGeSc";

const optionsObj = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

const fetchTrendingMovies = async () => {
  const resp = await axios.get(`${BASE_URL}/trending/movie/day`, optionsObj);
  return resp.data;
};

const fetchMovieByQuery = async query => {
  const resp = await axios.get(`${BASE_URL}/search/movie?query=${query}`, optionsObj);
  return resp.data;
};

const fetchMovieDetailsByMovieId = async movieId => {
  const resp = await axios.get(`${BASE_URL}/movie/${movieId}`, optionsObj);
  return resp.data;
};

const fetchCreditsByMovieId = async movieId => {
  const resp = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, optionsObj);
  return resp.data;
};

const fetchReviewsByMovieId = async movieId => {
  const resp = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, optionsObj);
  return resp.data;
};

const api = {
  fetchTrendingMovies,
  fetchMovieByQuery,
  fetchMovieDetailsByMovieId,
  fetchCreditsByMovieId,
  fetchReviewsByMovieId,
};

export default api;
