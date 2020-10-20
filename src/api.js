import axios from 'axios';

const isLocalhost = window.location.host === 'localhost:3000';

const api = axios.create({
    baseUrl: isLocalhost ? '/' : 'https://evgenymir.github.io/irline-react/build/',
    timeout: 1000 * 5,
});

export default api;
