import axios from 'axios';

const api = axios.create({
  baseURL: '/api',  // La baseURL relative vers le backend Django via proxy Nginx
});

export default api;
