import React from 'react';

import s from './Login.module.css';

export const Login = () => (
  <div className={s.box}>
    <form>
      <span className={s.textCenter}>login</span>
      <div className={s.inputContainer}>
        <input id="text" type="text" required />
        <label htmlFor="Email">
          Email
          <input id="Email" type="email" required />
        </label>
      </div>
      <div className={s.inputContainer}>
        <label htmlFor="Password">
          Password
          <input id="Password" type="password" required />
        </label>
      </div>
      <button type="button" className={s.btn}>
        submit
      </button>
    </form>
  </div>
);
