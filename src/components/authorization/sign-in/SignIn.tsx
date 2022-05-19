import React, { ChangeEvent, useState } from 'react';

import { useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import s from 'components/authorization/sign-in/SignIn.module.css';
import { CustomButton } from 'components/custom-button';
import { CustomInput } from 'components/custom-input';
import { InputHook } from 'components/hooks/input-hook/InputHook';
import { Nullable } from 'components/types';
import { PATH } from 'enums/pathes';
import { requestStatus } from 'enums/request';
import { validateEmail } from 'helpers/authorization/emailValidator';
import { validatePassword } from 'helpers/authorization/passwordValidator';
import { setAppStatusAC } from 'store/reducers/app-reducer';
import { setServerErrorAC } from 'store/reducers/errors-reducer';
import { SignInTC } from 'store/reducers/signIn-reducer';
import { AppState, useAppDispatch } from 'store/store';

export const SignIn = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const serverError = useSelector<AppState, Nullable<string> | undefined>(
    state => state.errors.serverError,
  );
  const networkError = useSelector<AppState, Nullable<string> | undefined>(
    state => state.errors.networkError,
  );
  const isAuth = useSelector<AppState, boolean>(state => state.signIn.isAuth);

  const {
    inputValue: email,
    handleInputValue: handleEmail,
    resetInputValue: resetEmail,
  } = InputHook('');
  const {
    inputValue: password,
    handleInputValue: handlePassword,
    resetInputValue: resetPassword,
  } = InputHook('');
  const dispatch = useAppDispatch();

  const onChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) =>
    setRememberMe(e.currentTarget.checked);

  const data = { email, password, rememberMe };
  const delay = 3000;

  const onSubmit = () => {
    if (validateEmail(email) && validatePassword(password)) {
      dispatch(SignInTC(data));
      resetEmail();
      resetPassword();
      dispatch(setAppStatusAC(requestStatus.succeeded));
    }
    if (!validateEmail(email) || !validatePassword(password)) {
      dispatch(setServerErrorAC('Invalid data'));
      setTimeout(() => {
        dispatch(setServerErrorAC(''));
      }, delay);
    }
  };
  const onClickCancel = () => {
    resetEmail();
    resetPassword();
    dispatch(setAppStatusAC(requestStatus.idle));
  };

  if (isAuth) {
    return <Navigate to={PATH.PROFILE_PAGE} />;
  }

  return (
    <div className={s.box}>
      <span className={s.textCenter}>login</span>
      {serverError && <span style={{ color: 'red' }}>{serverError}</span>}
      {networkError && <span style={{ color: 'red' }}>{networkError}</span>}
      <CustomInput
        placeholder="Email"
        onChange={handleEmail}
        value={email}
        type="text"
        name="email"
      />
      <CustomInput
        placeholder="Password"
        onChange={handlePassword}
        value={password}
        type="password"
        name="password"
      />
      <div className={s.inputContainer}>
        <label className={s.container} htmlFor="inputCheckbox">
          Remember Me
          <input
            id="inputCheckbox"
            type="checkbox"
            required={false}
            name="checkbox"
            checked={rememberMe}
            onChange={onChangeCheckbox}
          />
          <span className={s.checkmark} />
        </label>
      </div>
      <div className={s.btn}>
        <CustomButton title="Sign In" onClick={onSubmit} />
      </div>
      <div className={s.link}>
        <p>
          {' '}
          Do not have an account?{' '}
          <NavLink to={PATH.REGISTRATION_PAGE} onClick={onClickCancel}>
            Sign Up
          </NavLink>{' '}
        </p>
      </div>
      <div className={s.link}>
        <NavLink to={PATH.FORGOT_PASSWORD_PAGE} onClick={onClickCancel}>
          Forgot Password
        </NavLink>
      </div>
    </div>
  );
};
