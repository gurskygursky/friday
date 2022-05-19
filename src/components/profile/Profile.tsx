import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import s from 'components/authorization/sign-in/SignIn.module.css';
import { CustomButton } from 'components/custom-button';
import { PATH } from 'enums/pathes';
import { SignOutTC } from 'store/reducers/signIn-reducer';
import { AppState, useAppDispatch } from 'store/store';

export const Profile = () => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector<AppState, boolean>(state => state.signIn.isAuth);

  const onClickLogout = () => {
    dispatch(SignOutTC());
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
