import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export const getProfile = (token, controller) => {
  const url = `${baseUrl}/auth/detail`;
  return axios.get(url, {
    signal: controller.signal,
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const editProfile = (
  token,
  first_name,
  last_name,
  phone,
  image,
  controller
) => {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("first_name", first_name);
  formData.append("last_name", last_name);
  formData.append("phone", phone);
  const url = `${baseUrl}/auth/edit`;
  return axios.patch(url, formData, {
    data: formData,
    signal: controller.signal,
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const logout = (token, controller) => {
  const url = `${baseUrl}/auth/logout`;
  return axios.post(
    url,
    {},
    {
      signal: controller.signal,
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};
