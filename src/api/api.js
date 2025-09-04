import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your real API

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example endpoints
export const fetchNewsByCountry = async (countryCode) => {
  const response = await apiClient.get(`/news?country=${countryCode}`);
  return response.data;
};

export const fetchUserProfile = async (userId) => {
  const response = await apiClient.get(`/user/${userId}`);
  return response.data;
};

export const postFeedback = async (data) => {
  const response = await apiClient.post('/feedback', data);
  return response.data;
};