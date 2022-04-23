import React from 'react';

import { NavLink } from 'react-router-dom';

import s from 'components/authorization/sign-up/SignUp.module.css';
import { CustomButton } from 'components/custom-button';
import { PATH } from 'enums/pathes';

export const SignUp = () => (
  <div className={s.box}>
    <span className={s.textCenter}>Sign Up</span>
    <div className={s.inputContainer}>
      <label htmlFor="inputEmail" className={s.label}>
        <input
          size={40}
          type="email"
          id="inputEmail"
          placeholder="Email"
          required
          autoComplete="off"
        />
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
          autoComplete="off"
        />
      </label>
    </div>
    <div className={s.inputContainer}>
      <label htmlFor="confirmPassoword" className={s.label}>
        <input
          size={40}
          type="password"
          id="confirmPassoword"
          placeholder="Confirm password"
          required
          autoComplete="off"
        />
      </label>
    </div>
    <NavLink to={PATH.LOGIN_PAGE}>
      <CustomButton title="Cancel" onClick={() => {}} />
    </NavLink>
    <CustomButton title="Sign Up" onClick={() => {}} />
  </div>
);
