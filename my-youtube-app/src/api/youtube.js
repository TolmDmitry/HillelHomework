import axios from 'axios';
import { YOUTUBE_URL } from '../constants';
import { ACCESS_KEY } from '../access_key';

export const youtube = axios.create({
  baseURL: YOUTUBE_URL,
  params: {
    part: 'snippet',
    maxResults: 6,
    key: ACCESS_KEY
  }
});

