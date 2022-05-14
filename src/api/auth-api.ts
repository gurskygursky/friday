import { AxiosResponse } from 'axios';

import { instance } from './api-config';

export type RegisterParamsType = {
  email: string;
  password: string;
};

export const authAPI = {
  registration(params: RegisterParamsType) {
    return instance.post<AxiosResponse>(`auth/register`, params);
  },
};
