// import { AxiosResponse } from 'axios';

// import { instance } from './apiConfig';

import { AxiosResponse } from 'axios';

import { instance } from 'api/api-config';
import { LoginResponseType } from 'api/auth-api';

export const profileAPI = {
  update(params: UpdateParamsType) {
    return instance.put<AxiosResponse<UpdateUserResponseType>>(`auth/me`, { params });
  },
};

export type UpdateParamsType = {
  name: string;
  avatar: string; // url or base64
};
export type UpdateUserResponseType = {
  updatedUser: LoginResponseType;
  error?: string;
};
