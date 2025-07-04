import axios from 'axios';

export const API_URL = 'https://your-backend-url.com';

export const login = async (email: string, password: string) => {
  const res = await axios.post(`${API_URL}/login`, {
    email,
    password,
  });
  return res.data;
};

export const register = async (email: string, password: string) => {
  const res = await axios.post(`${API_URL}/register`, {
    email,
    password,
  });
  return res.data;
};
