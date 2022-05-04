import React, { ChangeEvent } from 'react';

import { NavLink } from 'react-router-dom';

import s from 'components/authorization/forgot-password/ForgotPassword.module.css';
import { CustomButton } from 'components/custom-button';
import { CustomInput } from 'components/custom-input';
import { PATH } from 'enums/pathes';

type PropsType = {
  email: string;
  handleEmail: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const ForgotPassword = (props: PropsType) => {
  const { email, handleEmail } = props;

  // const dataPayload: AddNewPasswordType = {
  //   email: 'nya@nya.nya', // кому восстанавливать пароль
  //   from: 'test-front-admin <ai73a@yandex.by>', // можно указать разработчика фронта)
  //   message: `<div style="background-color: lime; padding: 15px">
  // password recovery link:
  // <a href='http://gurskygursky.github.io/friday/#/set-new-password/$token$'>
  // link</a></div>`, // хтмп-письмо, вместо $token$ бэк вставит токен
  // };

  const onSendButtonClick = () => {};

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
      <CustomButton title="Send" onClick={onSendButtonClick} />
      <NavLink to={PATH.LOGIN_PAGE}>
        <p>Try logging in </p>
      </NavLink>
    </div>
  );
};
