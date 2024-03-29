import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import s from 'components/authorization/sign-up/SignUp.module.css';
import { CustomButton } from 'components/custom-button';
import { CustomInput } from 'components/custom-input';
import { Nullable } from 'components/types';
import { PATH } from 'enums/pathes';
import { requestStatus } from 'enums/request';
import { validateEmail } from 'helpers/authorization/emailValidator';
import { validatePassword } from 'helpers/authorization/passwordValidator';
import { useInput } from 'hooks';
import { setAppStatusAC } from 'store/reducers/app-reducer';
import { setServerErrorAC } from 'store/reducers/errors-reducer';
import { signUpTC } from 'store/reducers/signUp-reducer';
import { AppState, useAppDispatch } from 'store/store';

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const isFetching = useSelector<AppState, boolean>(state => state.signUp.isFetching);
  const isSignUp = useSelector<AppState, boolean>(state => state.signUp.isSignUp);
  const serverError = useSelector<AppState, Nullable<string> | undefined>(
    state => state.errors.serverError,
  );
  const networkError = useSelector<AppState, Nullable<string> | undefined>(
    state => state.errors.networkError,
  );
  const { value: email, onChange: handleEmail, clearValue: clearEmail } = useInput('');
  const {
    value: password,
    onChange: handlePassword,
    clearValue: clearPassword,
  } = useInput('');
  const {
    value: confirmPassword,
    onChange: handleConfirmPassword,
    clearValue: clearConfirmPassword,
  } = useInput('');

  const data = { email, password };

  const onSubmit = () => {
    if (
      password !== confirmPassword ||
      password === null ||
      confirmPassword === null ||
      !validatePassword(password) ||
      !validateEmail(email)
    ) {
      dispatch(setServerErrorAC('Invalid data'));
    }
  };
  const onClickCancel = () => {
    clearEmail();
    clearPassword();
    clearConfirmPassword();
    dispatch(setAppStatusAC(requestStatus.idle));
  };
  if (validatePassword(password) && validateEmail(email)) {
    dispatch(signUpTC(data));
    clearPassword();
    clearEmail();
    clearConfirmPassword();
  }
  if (isSignUp) {
    return <Navigate to={PATH.LOGIN_PAGE} />;
  }

  return (
    <div className={s.box}>
      <span className={s.textCenter}>Sign Up</span>
      {serverError && <span style={{ color: 'red' }}>{serverError}</span>}
      {networkError && <span style={{ color: 'red' }}>{networkError}</span>}
      <CustomInput
        placeholder="Email"
        onChange={handleEmail}
        value={email}
        type="email"
        name="email"
      />
      <CustomInput
        placeholder="Password"
        onChange={handlePassword}
        value={password}
        type="password"
        name="password"
      />
      <CustomInput
        placeholder="Confirm password"
        onChange={handleConfirmPassword}
        value={confirmPassword}
        type="password"
        name="confirmPassword"
      />
      <NavLink to={PATH.LOGIN_PAGE}>
        <CustomButton title="Cancel" onClick={onClickCancel} />
      </NavLink>
      <CustomButton title="Sign Up" onClick={onSubmit} disabled={isFetching} />
    </div>
  );
};
