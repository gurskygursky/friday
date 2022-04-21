import React from 'react';

import s from 'components/authorization/forgot-password/ForgotPassword.module.css';

export const ForgotPassword = () => (
  <div className={s.box}>
    <span className={s.textCenter}>Create New Password</span>
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
    <button type="button" className={s.btn}>
      Confirm
    </button>
  </div>
);
