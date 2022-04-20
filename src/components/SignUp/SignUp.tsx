import React from 'react';

import s from 'components/SignUp/SignUp.module.css';

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
      <button type="button" className={s.btn}>
        Cancel
      </button>
      <button type="button" className={s.btn}>
        Sign Up
      </button>
    </form>
  </div>
);
