import React from 'react';

import s from 'components/authorization/forgot-password/ForgotPassword.module.css';
import { CustomButton } from 'components/custom-button';

export const ForgotPassword = () => (
  <div className={s.box}>
    <span className={s.textCenter}>Create New Password</span>
    <div className={s.inputContainer}>
      <label htmlFor="newPassword" className={s.label}>
        <input
          size={40}
          type="password"
          id="newPassword"
          placeholder="Password"
          required
          autoComplete="off"
        />
      </label>
    </div>
    <CustomButton title="Confirm" onClick={() => {}} />
  </div>
);
