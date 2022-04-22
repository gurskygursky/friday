import React from 'react';

import s from './CustomButton.module.css';

type ButtonPropsType = {
  title: string;
  onClick: () => void;
};

export const CustomButton = React.memo((props: ButtonPropsType) => {
  const { onClick, title } = props;
  const onButtonClick = (): void => {
    onClick();
  };
  return (
    <button className={s.btn} onClick={onButtonClick} type="button" disabled>
      {title}
    </button>
  );
});
