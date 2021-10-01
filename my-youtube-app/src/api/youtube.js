import axios from 'axios';
import { YOUTUBE_URL } from '../constants';
import { ACCESS_KEY } from '../access_key';

const unsplashAxios = axios.create({
  baseURL: YOUTUBE_URL
});

export const searchVideos = (query) => {
  return unsplashAxios.get('/search', { params: { query, key: ACCESS_KEY } });
}
