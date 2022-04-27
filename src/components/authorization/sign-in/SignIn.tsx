import React from 'react';

import { NavLink } from 'react-router-dom';

import s from 'components/authorization/sign-in/SignIn.module.css';
import { CustomButton } from 'components/custom-button';
import { PATH } from 'enums/pathes';

export const SignIn = () => (
  <div className={s.box}>
    <span className={s.textCenter}>login</span>
    <div className={s.inputContainer}>
      <label htmlFor="inputEmail" className={s.label}>
        <input size={40} type="email" id="inputEmail" placeholder="Email" required />
      </label>
    </div>
    <div className={s.inputContainer}>
      <label htmlFor="inputPassword" className={s.label}>
        <input
          size={40}
          type="password"
          id="inputPassword"
          placeholder="Password"
          required
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
  </div>
);
