import React, { ChangeEvent } from 'react';

import { useSelector } from 'react-redux';

import s from 'components/authorization/forgot-password/ForgotPassword.module.css';
import { CustomButton } from 'components/custom-button';
import { CustomInput } from 'components/custom-input';
import { Nullable } from 'components/types';
import { validatePassword } from 'helpers/authorization/passwordValidator';
import { setServerErrorAC } from 'store/reducers/errors-reducer';
import { AppState, useAppDispatch } from 'store/store';

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
  const delay = 3000;
  const onSubmit = () => {
    if (validatePassword(password)) {
      // dispatch(SetNewPasswordTC());
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
      <span className={s.textCenter}>Forgot your password?</span>
      <div className={s.inputContainer}>
        <CustomInput
          placeholder="Email"
          type="email"
          value={password}
          onChange={handlePassword}
        />
        {networkError && <span style={{ color: 'red' }}>{networkError}</span>}
      </div>
      <CustomButton title="Send" onClick={onSubmit} />
    </div>
  );
};
