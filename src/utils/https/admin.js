import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export const getHistorySeat = (token, id, controller) => {
  const url = `${baseUrl}/transaction/history/${id}`;
  return axios.get(url, {
    signal: controller.signal,
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const createMovie = (token, file, body, controller) => {
  const url = `${baseUrl}/movie`;
  const formData = new FormData();
  if (file !== "") formData.append("image", file);
  Object.keys(body).forEach((key) => {
    formData.set(key, body[key]);
  });
  console.log("ADMIN");
  return axios.post(url, formData, {
    signal: controller.signal,
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const createSchedule = (token, body, controller) => {
  const url = `${baseUrl}/teather/create-schedule`;
  return axios.post(url, body, {
    signal: controller.signal,
    headers: { Authorization: `Bearer ${token}` },
  });
};
