import { ForgotPAsswordPayload, LoginPayload } from '@/types/auth';
import API from '.';

export const postLogin = async (body: LoginPayload) => {
  const { data } = await API.post(`/auth/login`, body);
  return data;
};

export const postForgotPassword = async (body: ForgotPAsswordPayload) => {
  const { data } = await API.post('/users/forgot-password', body);
  return data;
};

export const postLogout = async () => {
  const { data } = await API.post('/auth/logout');
  return data;
};
