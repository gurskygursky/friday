import React, { ChangeEvent } from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { SetNewPasswordType } from 'api/forgot-password-api';
import s from 'components/authorization/forgot-password/ForgotPassword.module.css';
import { CustomButton } from 'components/custom-button';
import { CustomInput } from 'components/custom-input';
import { Nullable } from 'components/types';
import { validatePassword } from 'helpers/authorization/passwordValidator';
import { setServerErrorAC } from 'store/reducers/errors-reducer';
import { AppState, useAppDispatch } from 'store/store';
import { SetNewPasswordTC } from 'store/thunk/SetNewPassword';

type PropsType = {
  password: string;
  handlePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  clearPassword: () => void;
};

export const SetNewPassword = (props: PropsType) => {
  const { password, handlePassword, clearPassword } = props;
  const dispatch = useAppDispatch();
  const networkError = useSelector<AppState, Nullable<string> | undefined>(
    state => state.errors.networkError,
  );

  const getToken = useParams<'token'>();
  const { token } = getToken as { token: string };

  const data: SetNewPasswordType = { password, resetPasswordToken: token };
  const delay = 3000;
  const onSubmit = () => {
    if (validatePassword(password)) {
      dispatch(SetNewPasswordTC(data));
      clearPassword();
    } else {
      dispatch(setServerErrorAC('Invalid data'));
      setTimeout(() => {
        dispatch(setServerErrorAC(null));
      }, delay);
    }
  };

  return (
    <div className={s.box}>
      <span className={s.textCenter}>Choose a new password</span>
      <div className={s.inputContainer}>
        <CustomInput
          placeholder="Password"
          type="password"
          value={password}
          onChange={handlePassword}
        />
        {networkError && <span style={{ color: 'red' }}>{networkError}</span>}
      </div>
      <CustomButton title="Send" onClick={onSubmit} />
    </div>
  );
};
