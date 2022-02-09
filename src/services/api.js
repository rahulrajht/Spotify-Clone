import axios from 'axios';
import { getTokenFromResponse } from '../spotify';

const token = getTokenFromResponse().access_token
const api = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export default api;
