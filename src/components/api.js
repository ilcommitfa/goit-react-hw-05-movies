import axios from 'axios';

const API_KEY = '1c946dce2b60cb636de6f72a25cb04da';

export const fetchTrendingMovies = async (page) => {
  const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${page}`);
  return response.data;
};

export const searchMovies = async (query) => {
  const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
  return response.data;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const fetchMovieCredits = async (movieId) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`);
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`);
  return response.data.results;
};