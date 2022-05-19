import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import s from 'components/authorization/sign-in/SignIn.module.css';
import { CustomButton } from 'components/custom-button';
import { PATH } from 'enums/pathes';
import { AppState } from 'store/store';

export const Profile = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector<AppState, boolean>(state => state.signIn.isAuth);

  const onClickLogout = () => {
    dispatch(LogoutTC);
  };

  if (!isAuth) {
    return <Navigate to={PATH.LOGIN_PAGE} />;
  }

  return (
    <div className={s.box}>
      <span className={s.textCenter}>Profile</span>
      <input
        type="file"
        alt="image-input"
        name="image-input"
        id="image-input"
        accept=".jpg, .jpeg, .png"
        onChange={() => {}}
      />
      <div className={s.btn}>
        <CustomButton title="LOGOUT" onClick={onClickLogout} />
      </div>
    </div>
  );
};
