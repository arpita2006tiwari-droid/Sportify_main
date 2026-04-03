
// wait, the above is wrong. let's fix it when it is running. oops I imported axios from react-router-dom above? Let me use axios properly.
import axiosLibrary from 'axios';
import toast from 'react-hot-toast';

const api = axiosLibrary.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 5000,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || error.message || 'An error occurred';
    // Let's suppress network errors regarding localhost so we can mock successfully if needed
    if (error.code !== 'ERR_NETWORK') {
      toast.error(message);
    }
    return Promise.reject(error);
  }
);

export default api;
