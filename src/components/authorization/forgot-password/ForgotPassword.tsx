import React, { ChangeEvent } from 'react';

import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import s from 'components/authorization/forgot-password/ForgotPassword.module.css';
import { CustomButton } from 'components/custom-button';
import { CustomInput } from 'components/custom-input';
import { PATH } from 'enums/pathes';
import { isEmailValid } from 'helpers/authorization/emailValidator';

type PropsType = {
  email: string;
  handleEmail: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const ForgotPassword = (props: PropsType) => {
  const { email, handleEmail } = props;

  // const onSendButtonClick = () => {
  //   const timeOut = 3000;
  //
  //   if (isEmailValid(email)) {
  //     dispatch(forgotPasswordAddEmailTC(dataPayload, setShowMessage));
  //     resetEmail('');
  //   } else {
  //     dispatch(setErrorMessagePasswordAC('Invalid email'));
  //     setTimeout(() => {
  //       dispatch(setErrorMessagePasswordAC(''));
  //     }, timeOut);
  //   }
  // };

  return (
    <div className={s.box}>
      <span className={s.textCenter}>Forgot your password?</span>
      <div className={s.inputContainer}>
        <CustomInput
          placeholder="Email"
          type="text"
          value={email}
          onChange={handleEmail}
        />
      </div>
      <p> Enter your email and we will send you further instructions</p>
      <CustomButton title="Send" onClick={() => {}} />
      <NavLink to={PATH.LOGIN_PAGE}>
        <p>Try logging in </p>
      </NavLink>
    </div>
  );
};
