import React, { ChangeEvent, useState } from 'react';

import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import s from 'components/authorization/sign-in/SignIn.module.css';
import { CustomButton } from 'components/custom-button';
import { CustomInput } from 'components/custom-input';
import { InputHook } from 'components/hooks/input-hook/Input';
import { PATH } from 'enums/pathes';
import { requestStatus } from 'enums/request';
import { isEmailValid } from 'helpers/authorization/emailValidator';
import { isPasswordValid } from 'helpers/authorization/passwordValidator';
import { setAppStatusAC } from 'store/reducers/app-reducer';

export const SignIn = () => {
  const [rememberMe, handleRememberMe] = useState<boolean>(false);
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
  const dispatch = useDispatch();

  const data = { email, password, rememberMe };

  const onChangeCheckbox = (e: ChangeEvent<HTMLInputElement>): void =>
    handleRememberMe(e.currentTarget.checked);

  const onSubmit = (): void => {
    if (isEmailValid(email) && isPasswordValid(password)) {
      dispatch(loginTC({ data }));
      resetEmail();
      resetPassword();
      dispatch(setAppStatusAC(requestStatus.succeeded));
    }
  };

  return (
    <div className={s.box}>
      <span className={s.textCenter}>login</span>
      <CustomInput
        placeholder="Email"
        onChange={handleEmail}
        value={email}
        type="email"
        name="email"
      />
      {/* <div className={s.inputContainer}> */}
      {/*  <label htmlFor="inputEmail" className={s.label}> */}
      {/*    <input size={40} type="email" id="inputEmail" placeholder="Email" required /> */}
      {/*  </label> */}
      {/* </div> */}
      {/* <div className={s.inputContainer}> */}
      {/*  <label htmlFor="inputPassword" className={s.label}> */}
      {/*    <input */}
      {/*      size={40} */}
      {/*      type="password" */}
      {/*      id="inputPassword" */}
      {/*      placeholder="Password" */}
      {/*      required */}
      {/*    /> */}
      {/*  </label> */}
      {/* </div> */}
      <CustomInput
        placeholder="Password"
        onChange={handlePassword}
        value={password}
        type="password"
        name="password"
      />
      <CustomInput
        onChange={onChangeCheckbox}
        checked={rememberMe}
        type="checkbox"
        name="checkbox"
      />
      {/* <div className={s.inputContainer}> */}
      {/*  <label className={s.container} htmlFor="inputCheckbox"> */}
      {/*    Remember Me */}
      {/*    <input */}
      {/*      id="inputCheckbox" */}
      {/*      type="checkbox" */}
      {/*      required={false} */}
      {/*      name="checkbox" */}
      {/*      value={rememberMe} */}
      {/*      onChange={onChangeCheckbox} */}
      {/*    /> */}
      {/*    <span className={s.checkmark} /> */}
      {/*  </label> */}
      {/* </div> */}
      <CustomButton title="Sign In" onClick={onSubmit} />
      <NavLink to={PATH.REGISTRATION_PAGE}>
        <CustomButton title="Sign Up" onClick={() => {}} />
      </NavLink>
    </div>
  );
};
