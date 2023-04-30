import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export const getGenre = (controller) => {
  const url = `${baseUrl}/genre`;
  return axios.get(url, { signal: controller.signal });
};
