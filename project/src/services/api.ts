import axios, { AxiosInstance } from 'axios';
import { Server } from '../const';

export const createApi = (): AxiosInstance => axios.create(
  {
    baseURL: Server.Url,
    timeout: +Server.Timeout,
  },
);
