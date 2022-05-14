import React from 'react';

import s from './CustomButton.module.css';

type ButtonPropsType = {
  title: string;
  onClick: () => void;
  disabled?: boolean;
};

export const CustomButton = React.memo((props: ButtonPropsType) => {
  const { onClick, title, disabled } = props;
  const onButtonClick = (): void => {
    onClick();
  };
  return (
    <button className={s.btn} onClick={onButtonClick} disabled={disabled} type="button">
      {title}
    </button>
  );
});
