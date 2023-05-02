import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export const getNowShowingMovies = () => {
  return axios.get(`${baseUrl}/movies?page=1&limit=10`);
};
