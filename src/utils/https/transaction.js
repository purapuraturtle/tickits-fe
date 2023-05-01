import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export const createBooking = (body, controller) => {
  const url = `${baseUrl}/booking`;
  return axios.post(url, body, { signal: controller.signal });
};

export const getHistorySeat = (token, id, controller) => {
  const url = `${baseUrl}/transaction/history/${id}`;
  return axios.get(url, {
    signal: controller.signal,
    headers: { Authorization: `Bearer ${token}` },
  });
};
