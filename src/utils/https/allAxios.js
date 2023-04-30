import axios from "axios";

export const register = (email, password) => {
  const body = {
    email: email,
    password: password,
  };
  const url = `https://tickits-be.vercel.app/auth/register`;
  return axios.post(url, body);
};

export const login = (email, password) => {
  const body = {
    email: email,
    password: password,
  };
  const url = `https://tickits-be.vercel.app/auth/login`;
  return axios.post(url, body);
};
