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

export const checkEmail = (email) => {
  const body = {
    email: email,
  };
  const url = `https://tickits-be.vercel.app/auth/forgot-password`;
  return axios.post(url, body);
};

export const resetPassword = (id, newPassword, confirmPassword) => {
  const body = {
    newPassword: newPassword,
    confirmPassword: confirmPassword,
  };
  const url = `https://tickits-be.vercel.app/auth/reset-password/${id}`;
  return axios.post(url, body);
};