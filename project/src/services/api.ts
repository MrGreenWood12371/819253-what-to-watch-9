import axios, { AxiosInstance } from 'axios';
import { Server } from '../const';

export const createApi = (): AxiosInstance => {
  const api = axios.create(
    {
      baseURL: Server.Url,
      timeout: +Server.Timeout,
    },
  );

  return api;
};
