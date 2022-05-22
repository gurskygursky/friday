import React, { ChangeEvent } from 'react';

import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { ForgotPasswordDataType } from 'api/forgot-password-api';
import s from 'components/authorization/forgot-password/ForgotPassword.module.css';
import { CustomButton } from 'components/custom-button';
import { CustomInput } from 'components/custom-input';
import { Nullable } from 'components/types';
import { PATH } from 'enums/pathes';
import { validateEmail } from 'helpers/authorization/emailValidator';
import { setServerErrorAC } from 'store/reducers/errors-reducer';
import { AppState, useAppDispatch } from 'store/store';
import { ForgotTC } from 'store/thunk/ForgotPassword';

type PropsType = {
  email: string;
  handleEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  clearEmail: () => void;
};

export const ForgotPassword = (props: PropsType) => {
  const { email, handleEmail, clearEmail } = props;
  const dispatch = useAppDispatch();
  const networkError = useSelector<AppState, Nullable<string> | undefined>(
    state => state.errors.networkError,
  );
  const data: ForgotPasswordDataType = {
    email,
    from: 'test-front-admin <yahorhurski@gmail.com>',
    message: `<div style='background-color: #ffd500; 
padding: 15px; 
border-color: #ff9900; 
width: 250px;
height: 30px'> 
password recovery link: <a href='https://gurskygursky.github.io/friday/#/set-new-password/$token$'> recovery link </a></div>`,
  };

  const delay = 3000;
  const onSubmit = () => {
    if (validateEmail(email)) {
      dispatch(ForgotTC(data));
      clearEmail();
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
          value={email}
          onChange={handleEmail}
        />
        {networkError && <span style={{ color: 'red' }}>{networkError}</span>}
      </div>
      <p> Enter your email and we will send you further instructions</p>
      <CustomButton title="Send" onClick={onSubmit} />
      <NavLink to={PATH.LOGIN_PAGE}>
        <p>Try logging in </p>
      </NavLink>
    </div>
  );
};
