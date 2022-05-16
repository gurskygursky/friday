import React from 'react';

// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import s from 'components/authorization/sign-up/SignUp.module.css';
import { CustomButton } from 'components/custom-button';
import { CustomInput } from 'components/custom-input';
import { InputHook } from 'components/hooks/input-hook/Input';
import { PATH } from 'enums/pathes';
import { validateEmail } from 'helpers/authorization/emailValidator';
import { validatePassword } from 'helpers/authorization/passwordValidator';
import { signUpTC } from 'store/reducers/signUp-reducer';
import { useAppDispatch } from 'store/store';
// import { RootStoreType } from 'store/store';

export const SignUp = () => {
  const dispatch = useAppDispatch();
  // const isFetching = useSelector<RootStoreType, boolean>(
  //   state => state.signUp.isFetching,
  // );
  // const isSignUp = useSelector<RootStoreType, boolean>(state => state.signUp.isSignUp);
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

  const data = { email, password };

  const onSubmit = () => {
    if (
      password !== confirmPassword ||
      password === null ||
      confirmPassword === null ||
      !validatePassword(password) ||
      !validateEmail(email)
    ) {
      console.error('error');
    }
  };
  if (validatePassword(password) && validateEmail(email)) {
    dispatch(signUpTC(data));
    resetPassword();
    resetEmail();
    resetConfirmPassword();
  }

  return (
    <div className={s.box}>
      <span className={s.textCenter}>Sign Up</span>
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
