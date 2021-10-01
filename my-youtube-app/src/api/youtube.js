import axios from 'axios';
import { YOUTUBE_URL, ACCESS_KEY } from '../constants';

const unsplashAxios = axios.create({
  baseURL: YOUTUBE_URL
});

export const searchVideos = (query) => {
  return unsplashAxios.get('/search', { params: { query, key: ACCESS_KEY } });
}
