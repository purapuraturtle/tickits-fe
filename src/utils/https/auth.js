import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export const register = (email, password, controller) => {
  const body = {
    email: email,
    password: password,
  };
  const url = `https://tickits-be.vercel.app/auth/register`;
  return axios.post(url, body, {
    signal: controller.signal
  });
};

export const login = (email, password, controller) => {
  const body = {
    email: email,
    password: password,
  };
  const url = `${baseUrl}/auth/login`;
  return axios.post(url, body, {
    signal: controller.signal
  });
};

export const checkEmail = (email) => {
  const body = {
    email: email,
  };
  const url = `https://tickits-be.vercel.app/auth/forgot-password`;
  return axios.post(url, body);
};

export const editPassword = (
  token,
  { newPassword, confirmPassword },
  controller
) => {
  const body = {
    newPassword: newPassword,
    confirmPassword: confirmPassword,
  };
  const url = `https://tickits-be.vercel.app/auth/edit-password`;
  return axios.patch(url, body, {
    signal: controller.signal,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const resetPassword = (id, newPassword, confirmPassword) => {
  const body = {
    newPassword: newPassword,
    confirmPassword: confirmPassword,
  };
  const url = `https://tickits-be.vercel.app/auth/reset-password/${id}`;
  return axios.post(url, body);
};

export const checkId = (id) => {
  const url = `https://tickits-be.vercel.app/auth/reset-password/${id}`;
  return axios.get(url);
};
