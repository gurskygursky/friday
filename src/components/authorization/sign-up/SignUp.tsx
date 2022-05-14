import React from 'react';

import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import s from 'components/authorization/sign-up/SignUp.module.css';
import { CustomButton } from 'components/custom-button';
import { CustomInput } from 'components/custom-input';
import { InputHook } from 'components/hooks/input-hook/Input';
import { PATH } from 'enums/pathes';
import { isEmailValid } from 'helpers/authorization/emailValidator';
import { isPasswordValid } from 'helpers/authorization/passwordValidator';

export const SignUp = () => {
  const dispatch = useDispatch();
  const {
    inputValues: email,
    handleValueOnChange: handleEmail,
    handleResetValueOnChange: resetEmail,
  } = InputHook('');
  const {
    inputValues: password,
    handleValueOnChange: handlePassword,
    handleResetValueOnChange: resetPassword,
  } = InputHook('');
  const {
    inputValues: confirmPassword,
    handleValueOnChange: handleConfirmPassword,
    handleResetValueOnChange: resetConfirmPassword,
  } = InputHook('');

  const RegisterData = { email, password, confirmPassword };

  const timeOut = 1000;

  const onSubmit = (): void => {
    if (
      password !== confirmPassword ||
      password === null ||
      confirmPassword === null ||
      !isPasswordValid(password) ||
      !isEmailValid(email)
    ) {
      dispatch(setErrorMessagePasswordAC('invalid password'));
      setTimeout(() => {
        dispatch(setErrorMessagePasswordAC(''));
      }, timeOut);
    }
    if (isPasswordValid(password) && isEmailValid(email)) {
      dispatch(signUpTC(RegisterData));
      resetPassword('');
      resetEmail('');
      resetConfirmPassword('');
    }
  };

  return (
    <div className={s.box}>
      <span className={s.textCenter}>Sign Up</span>
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
        <CustomButton title="Cancel" onClick={() => {}} />
      </NavLink>
      <CustomButton title="Sign Up" onClick={onSubmit} />
    </div>
  );
};
