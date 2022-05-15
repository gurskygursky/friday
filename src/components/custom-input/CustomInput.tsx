import React, { ChangeEvent, memo } from 'react';

import s from 'components/authorization/sign-in/SignIn.module.css';

type PropsType = {
  placeholder?: string;
  type: string;
  name?: string;
  className?: string;
  value?: string;
  checked?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const CustomInput = memo((props: PropsType) => {
  const { placeholder, type, name, className, value, onChange, checked } = props;
  return (
    <div className={s.inputContainer}>
      <label htmlFor="inputPassword" className={s.label}>
        <input
          placeholder={placeholder}
          type={type}
          name={name}
          className={className}
          value={value}
          onChange={onChange}
          checked={checked}
        />
      </label>
    </div>
  );
});
