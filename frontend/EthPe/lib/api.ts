import axios from 'axios';

// export const API_URL = 'http://localhost:3000';
export const API_URL = 'https://backend-deployment-erkx.onrender.com'

export const login = async (email: string, password: string) => {
  const res = await axios.post(`${API_URL}/login`, {
    email,
    password,
  });
  return res.data;
};

export const register = async (email: string, password: string, name:string) => {
  const res = await axios.post(`${API_URL}/register`, {
    name,
    email,
    password,
  });
  return res.data;
};
