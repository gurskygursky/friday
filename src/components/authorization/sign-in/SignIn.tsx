import React from 'react';

import { NavLink } from 'react-router-dom';

import s from 'components/authorization/sign-in/SignIn.module.css';
import { PATH } from 'enums/pathes';

export const SignIn = () => (
  <div className={s.box}>
    <form>
      <span className={s.textCenter}>login</span>
      <div className={s.inputContainer}>
        <label htmlFor="inputEmail" className={s.label}>
          <input
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
      <button type="button" className={s.btn}>
        Sign In
      </button>
      <NavLink to={PATH.REGISTRATION_PAGE}>
        <button type="button" className={s.btn}>
          Sign Up
        </button>
      </NavLink>
    </form>
  </div>
);
