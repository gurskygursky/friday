import { AxiosResponse } from 'axios';

import { instance } from 'api/api-config';
import { Nullable } from 'components/types';

export type AddNewPasswordType = {
  email: Nullable<string>;
  from?: Nullable<string>;
  message?: Nullable<string>;
};

export type SetNewPasswordType = {
  password: Nullable<string>;
  resetPasswordToken?: Nullable<string>;
};

export type AddNewPasswordResponseType = {
  info: Nullable<string>;
  error: Nullable<string>;
};

export const forgotPasswordAPI = {
  addNewPassword(params: AddNewPasswordType) {
    return instance.post<AddNewPasswordType, AxiosResponse<AddNewPasswordResponseType>>(
      'auth/forgot',
      params,
    );
  },
  setNewPassword(params: SetNewPasswordType) {
    return instance.post<SetNewPasswordType, AxiosResponse<AddNewPasswordResponseType>>(
      'auth/set-new-password',
      params,
    );
  },
};
