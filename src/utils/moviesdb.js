import axios from 'axios';

const API_KEY = 'feccc6c807d31e1cfff77740c9278751';
const BASE_URL = 'https://api.themoviedb.org/3/';
const TRENDING_URL = 'trending/movie/day';
const BY_SEARCH_URL = 'search/movie';
const DETAILS_URL = 'movie/';
const ACTORS_URL = 'movie/';
const REVIEWS = 'movie/';

export async function getTrendingMovies() {
  const response = await axios.get(
    `${BASE_URL}${TRENDING_URL}?api_key=${API_KEY}`
  );
  return response;
}

export async function getMovieBySearch(query) {
  const response = await axios.get(
    `${BASE_URL}${BY_SEARCH_URL}?api_key=${API_KEY}&query=${query}`
  );
  return response;
}

export async function getMovieDetails(id) {
  const response = await axios.get(
    `${BASE_URL}${DETAILS_URL}${id}?api_key=${API_KEY}`
  );
  return response;
}

export async function getMovieActors(id) {
  const response = await axios.get(
    `${BASE_URL}${ACTORS_URL}${id}/credits?api_key=${API_KEY}`
  );
  return response;
}

export async function getMovieReviews(id) {
  const response = await axios.get(
    `${BASE_URL}${REVIEWS}${id}/reviews?api_key=${API_KEY}`
  );
  return response;
}
