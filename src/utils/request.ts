import axios from 'axios'
import type { RequestConfig } from '@/types';

// 创建axios 实例
const instance = axios.create({
  baseURL: '/api/v1',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true,
})


// 请求拦截器
instance.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error);
});


// 响应拦截器
instance.interceptors.response.use((response) => {
  return response.data; 
}, (error) => {
  return Promise.reject(error);
});


const request = (config: RequestConfig) => {
  const { url, method, data, params } = config;
  return instance.request({
    url,
    method,
    data,
    params
  });
}

export default request;