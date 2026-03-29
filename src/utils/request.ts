import axios, { type InternalAxiosRequestConfig } from 'axios'
import type { RequestConfig } from '@/types';
import { getToken } from './auth';

// 创建axios 实例
const instance = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true,
})


// 请求拦截器
instance.interceptors.request.use((config: InternalAxiosRequestConfig<RequestConfig>) => {
  console.log(config, '请求拦截器:config')
  const token = getToken();
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

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
  console.log(config, 'config')
  return instance.request({
    url,
    method,
    data,
    params
  });
}

export default request;