import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5163', 
  timeout: 10000,
});

export default api; 