import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import none_image from '../assets/images/none_image.png';

import { CustomButton } from 'components/custom-button';
import s from 'components/profile/Profile.module.css';
import { PATH } from 'enums/pathes';
import { InitialStateType } from 'store/reducers/profile-reducer';
import { SignOutTC } from 'store/reducers/signIn-reducer';
import { AppState, useAppDispatch } from 'store/store';

export const Profile = () => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector<AppState, boolean>(state => state.signIn.isAuth);
  const userData = useSelector<AppState, InitialStateType>(state => state.profilePage);

  const { avatar, email } = userData.profile;

  const onClickLogout = () => {
    dispatch(SignOutTC());
  };

  if (!isAuth) {
    return <Navigate to={PATH.LOGIN_PAGE} />;
  }

  return (
    <div className={s.box}>
      <span className={s.textCenter}>Profile</span>
      <img
        src={avatar !== null ? avatar : none_image}
        alt="avatar_image"
        className={s.avatar}
      />
      {email && <span style={{ color: 'white' }}>{email}</span>}
      <input
        style={{ color: 'white' }}
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
