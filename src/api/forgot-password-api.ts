import { AxiosResponse } from 'axios';

import { instance } from 'api/api-config';
import { Nullable } from 'components/types';

export type ForgotPasswordDataType = {
  email: Nullable<string>;
  from?: Nullable<string>;
  message?: Nullable<string>;
};

export type SetNewPasswordType = {
  password: Nullable<string>;
  resetPasswordToken?: Nullable<string>;
};

export type ForgotPasswordResponseType = {
  info: Nullable<string>;
  error: Nullable<string>;
};

export const forgotPasswordAPI = {
  forgot(params: ForgotPasswordDataType) {
    return instance.post<
      ForgotPasswordDataType,
      AxiosResponse<ForgotPasswordResponseType>
    >('auth/forgot', params);
  },
  set(params: SetNewPasswordType) {
    return instance.post<SetNewPasswordType, AxiosResponse<ForgotPasswordResponseType>>(
      'auth/set-new-password',
      params,
    );
  },
};
