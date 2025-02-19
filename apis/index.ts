import { MMKV } from 'react-native-mmkv';
import axios, { AxiosError } from 'axios';
import { storage } from '@/utils/mmkv';

export const API_URL = 'https://mobile.v2.notarly.app/api';

const API = axios.create({
  baseURL: API_URL,
});

export const setBaseURL = (subdomain: string) => {
  API.defaults.baseURL = `https://${subdomain}.v2.notarly.app/api`;
};

API.interceptors.request.use(
  (config) => {
    const jsonValue = storage.getString('user');
    let user = jsonValue != null ? JSON.parse(jsonValue) : null;
    if (user) {
      config.headers['Authorization'] = `Bearer ${user.token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export default API;
