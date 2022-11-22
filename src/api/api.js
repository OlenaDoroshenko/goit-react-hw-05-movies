import axios from "axios";

const API_KEY = '07f4457ec1467275eb4b6e96af61bfc5';
const BASE_URL = 'https://api.themoviedb.org/3/';


export const fetchTrendingMovies = async() => {
    const config = {
        params: {
            api_key: API_KEY,
          },
    }
    const response = await axios.get(`${BASE_URL}trending/all/day?`, config);
    return response.data.results;
}

export const fetchMoviesByQuery = async(query) => {
    const config = {
        params: {
            api_key: API_KEY,
            query,
          },
    }
    const response = await axios.get(`${BASE_URL}search/movie?`, config);
    return response.data.results;
}

export const fetchMoviesById = async(id) => {
    const config = {
        params: {
            api_key: API_KEY,
          },
    }
    const response = await axios.get(`${BASE_URL}movie/${id}?`, config);
    return response.data;
}

export const fetchCastById = async(id) => {
    const config = {
        params: {
            api_key: API_KEY,
          },
    }
    const response = await axios.get(`${BASE_URL}movie/${id}/credits?`, config);
    return response.data.cast;
}

export const fetchReviewsById = async(id) => {
    const config = {
        params: {
            api_key: API_KEY,
          },
    }
    const response = await axios.get(`${BASE_URL}movie/${id}/reviews?`, config);
    return response.data.results;
}
