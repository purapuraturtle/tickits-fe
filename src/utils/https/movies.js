import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export const getGenre = (controller) => {
  const url = `${baseUrl}/genre`;
  return axios.get(url, { signal: controller.signal });
};

export const getMovies = (params, controller) => {
  const { limit, page = 1, search = "", sort = "" } = params;
  const url = `${baseUrl}/movie?limit=${limit}&page=${page}&search=${search}&sort=${sort}`;
  return axios.get(url, { signal: controller.signal });
};

export const getMovieDetails = (movieId, controller) => {
  const url = `${baseUrl}/movie/${movieId}`;
  return axios.get(url, { signal: controller.signal });
};

export const getStudioTime = (info, controller) => {
  const url = `${baseUrl}/teather?open_date=${info}`;
  console.log(url);
  return axios.get(url, { signal: controller.signal });
};
