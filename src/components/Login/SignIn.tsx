import React from 'react';

import s from 'components/Login/SignIn.module.css';

export const SignIn = () => (
  <div className={s.box}>
    <form>
      <span className={s.textCenter}>login</span>
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
        <label className={s.container} htmlFor="inputCheckbox">
          Remember Me
          <input id="inputCheckbox" type="checkbox" />
          <span className={s.checkmark} />
        </label>
      </div>
      <button type="button" className={s.btn}>
        Sing In
      </button>
      <button type="button" className={s.btn}>
        Sign Up
      </button>
    </form>
  </div>
);
