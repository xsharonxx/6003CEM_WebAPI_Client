// client/src/utils/api.js
import axios from 'axios';

const token = localStorage.getItem('token');

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${token}` : ''
  }
});

// Interceptor: always attach updated token (if user logs in)
api.interceptors.request.use((config) => {
  const t = localStorage.getItem('token');
  if (t) config.headers.Authorization = `Bearer ${t}`;
  return config;
});

export default api;
