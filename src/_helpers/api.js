import axios from 'axios';

const API_BASE_URL = 'https://interview-api.onrender.com/v1';

export const login = async (email, password) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, {
    email,
    password,
  });
  return response.data;
};

export const getAllCards = async () => {
  const response = await axios.get(`${API_BASE_URL}/cards`);
  return response.data;
};

export const createCard = async (cardData) => {
  const response = await axios.post(`${API_BASE_URL}/cards`, cardData);
  return response.data;
};
