import axios from 'axios';
import path from 'path';

console.log(path.dirname());

const api = axios.create({
    baseURL: '/irline/build/',
    timeout: 1000 * 5,
});

export default api;
