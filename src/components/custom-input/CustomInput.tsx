import * as React from 'react';
import { memo } from 'react';

type PropsType = {
  placeholder: string;
  type: string;
  name?: string;
  className?: string;
  value: string;
  onChange: () => void;
};

export const CustomInput = memo((props: PropsType) => {
  const { placeholder, type, name, className, value, onChange } = props;
  return (
    <div>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        className={className}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
    </div>
  );
});
