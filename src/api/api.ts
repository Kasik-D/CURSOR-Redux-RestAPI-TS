import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

axios.interceptors.request.use((request) => {
  request.headers.set('X-RapidAPI-Key', import.meta.env.VITE_X_RAPID_API_KEY);
  request.headers.set('X-RapidAPI-Host', import.meta.env.VITE_RAPID_API_HOST);

  return request;
});

export default axios;
