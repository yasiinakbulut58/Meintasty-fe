import Agent from 'agentkeepalive';
import axios from 'axios';

const keepAliveAgent = new Agent({
  timeout: 60000, // active socket keepalive for 60 seconds
  freeSocketTimeout: 30000, // free socket keepalive for 30 seconds
});

const baseApi = axios.create({
  proxy: false,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  httpAgent: keepAliveAgent,
});

// Set default header
axios.defaults.headers.post['Content-Type'] = 'application/json';

// Add a request interceptor
axios.interceptors.request.use(
  (config) => config,
  (error) => {
    // Do something with request error
    Promise.reject(error);
  },
);

module.exports = {
  axios,
  baseApi,
};
