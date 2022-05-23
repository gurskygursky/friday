import React, { useEffect } from 'react';

import './App.css';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import {
  ForgotPasswordPage,
  SetNewPasswordPage,
  SignIn,
  SignUp,
} from 'components/authorization';
import { PageNotFound } from 'components/page-not-found';
import { Preloader } from 'components/preloader';
import { Profile } from 'components/profile';
import { PATH } from 'enums/pathes';
import { initializedAppTC } from 'store/reducers/app-reducer';
import { AppState, useAppDispatch } from 'store/store';

const App = () => {
  const isInitialized = useSelector<AppState, boolean>(state => state.app.isInitialized);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializedAppTC());
  }, [dispatch]);

  if (!isInitialized) {
    return <Preloader />;
  }
  return (
    <div className="container">
      <Routes>
        <Route path={PATH.PAGE_NOT_FOUND} element={<PageNotFound />} />
        <Route path={PATH.REGISTRATION_PAGE} element={<SignUp />} />
        <Route path={PATH.LOGIN_PAGE} element={<SignIn />} />
        <Route path={PATH.PROFILE_PAGE} element={<Profile />} />
        <Route path={PATH.FORGOT_PASSWORD_PAGE} element={<ForgotPasswordPage />} />
        <Route path={PATH.SET_NEW_PASSWORD_PAGE} element={<SetNewPasswordPage />} />
      </Routes>
    </div>
  );
};
export default App;
