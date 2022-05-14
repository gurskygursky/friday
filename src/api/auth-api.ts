import { AxiosResponse } from 'axios';

import { instance } from './api-config';

export const authAPI = {
  registration(params: RegisterParamsType) {
    return instance.post<RegisterParamsType, AxiosResponse>(`auth/register`, params);
  },
  login(params: LoginParamsType) {
    return instance.post<LoginParamsType, AxiosResponse<LoginResponseType>>(
      `auth/login`,
      params,
    );
  },
};

export type RegisterParamsType = {
  email: string;
  password: string;
};
export type LoginParamsType = {
  email: string;
  password: string;
  rememberMe: boolean;
};
export type LoginResponseType = {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  publicCardPacksCount: number; // количество колод

  created: Date;
  updated: Date;
  isAdmin: boolean;
  verified: boolean; // подтвердил ли почту
  rememberMe: boolean;

  error?: string;
};
