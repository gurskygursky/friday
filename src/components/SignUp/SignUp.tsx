import React from 'react';

import { NavLink } from 'react-router-dom';

import s from 'components/SignUp/SignUp.module.css';
import { PATH } from 'enums/pathes';

export const SignUp = () => (
  <div className={s.box}>
    <form>
      <span className={s.textCenter}>Sign Up</span>
      <div className={s.inputContainer}>
        <label htmlFor="inputEmail" className={s.label}>
          <input type="email" id="inputEmail" placeholder="Email" required />
        </label>
      </div>
      <div className={s.inputContainer}>
        <label htmlFor="inputPassword" className={s.label}>
          <input type="password" id="inputPassword" placeholder="Password" required />
        </label>
      </div>
      <div className={s.inputContainer}>
        <label htmlFor="inputPassword" className={s.label}>
          <input
            type="password"
            id="inputPassword"
            placeholder="Confirm password"
            required
          />
        </label>
      </div>
      <NavLink to={PATH.LOGIN_PAGE}>
        <button type="button" className={s.btn}>
          Cancel
        </button>
      </NavLink>

      <button type="button" className={s.btn}>
        Sign Up
      </button>
    </form>
  </div>
);
