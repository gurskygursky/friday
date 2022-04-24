import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL; // url из .env(ссылка на heroku)

export const index = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});
