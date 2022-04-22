import React from 'react';

import { NavLink } from 'react-router-dom';

import s from 'components/authorization/sign-in/SignIn.module.css';
import { CustomButton } from 'components/custom-button';
import { CustomInput } from 'components/custom-input';
import { PATH } from 'enums/pathes';

type PropsType = {
  email: string;
  handleEmail: () => void;
};
export const SignIn = (props: PropsType) => {
  const { email, handleEmail } = props;

  return (
    <div className={s.box}>
      <form>
        <span className={s.textCenter}>login</span>
        <div className={s.inputContainer}>
          <CustomInput
            placeholder="Email"
            type="email"
            value={email}
            onChange={handleEmail}
          />
          {/* <label htmlFor="inputEmail" className={s.label}> */}
          {/*  <input */}
          {/*    type="email" */}
          {/*    id="inputEmail" */}
          {/*    placeholder="Email" */}
          {/*    required */}
          {/*    autoComplete="off" */}
          {/*  /> */}
          {/* </label> */}
        </div>
        <div className={s.inputContainer}>
          <label htmlFor="inputPassword" className={s.label}>
            <input
              type="password"
              id="inputPassword"
              placeholder="Password"
              required
              autoComplete="off"
            />
          </label>
        </div>
        <div className={s.inputContainer}>
          <label className={s.container} htmlFor="inputCheckbox">
            Remember Me
            <input id="inputCheckbox" type="checkbox" required={false} />
            <span className={s.checkmark} />
          </label>
        </div>
        <CustomButton title="Sign In" onClick={() => {}} />
        <NavLink to={PATH.REGISTRATION_PAGE}>
          <CustomButton title="Sign Up" onClick={() => {}} />
        </NavLink>
      </form>
    </div>
  );
};
