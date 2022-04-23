import React, { ChangeEvent } from 'react';

import s from 'components/authorization/forgot-password/ForgotPassword.module.css';
import { CustomButton } from 'components/custom-button';
import { CustomInput } from 'components/custom-input';

type PropsType = {
  password: string;
  handlePassword: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const ForgotPassword = (props: PropsType) => {
  const { password, handlePassword } = props;

  return (
    <div className={s.box}>
      <span className={s.textCenter}>Create New Password</span>
      <div className={s.inputContainer}>
        <CustomInput
          placeholder="Password"
          type="password"
          value={password}
          onChange={handlePassword}
        />
        <span>{password}</span>
        {/* <label htmlFor="newPassword" className={s.label}> */}
        {/*  <input */}
        {/*    size={40} */}
        {/*    type="password" */}
        {/*    id="newPassword" */}
        {/*    placeholder="Password" */}
        {/*    required */}
        {/*    autoComplete="off" */}
        {/*  /> */}
        {/* </label> */}
      </div>
      <CustomButton title="Confirm" onClick={() => {}} />
    </div>
  );
};
