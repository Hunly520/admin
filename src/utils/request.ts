import axios from 'axios'

// 创建axios 实例
const request = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true,
})


request.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error);
});

request.interceptors.response.use((response) => {
  return response.data; 
}, (error) => {
  return Promise.reject(error);
});