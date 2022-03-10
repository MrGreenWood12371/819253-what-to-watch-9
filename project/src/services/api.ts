import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Server } from '../const';
import { getToken } from './token';

export const createApi = (): AxiosInstance => {
  const api = axios.create(
    {
      baseURL: Server.Url,
      timeout: +Server.Timeout,
    },
  );

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  return api;
};
