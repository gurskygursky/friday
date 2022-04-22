import React from 'react';

import './App.css';

import { Route, Routes } from 'react-router-dom';

import { ForgotPasswordPage } from 'components/authorization/forgot-password/ForgotPasswordPage';
import { SignIn } from 'components/authorization/sign-in/SignIn';
import { SignUp } from 'components/authorization/sign-up/SignUp';
import { PageNotFound } from 'components/page-not-found/PageNotFound';
import { Profile } from 'components/profile/Profile';
import { PATH } from 'enums/pathes';

const App = () => (
  <div className="container">
    <Routes>
      <Route path={PATH.PAGE_NOT_FOUND} element={<PageNotFound />} />
      <Route path={PATH.REGISTRATION_PAGE} element={<SignUp />} />
      <Route path={PATH.LOGIN_PAGE} element={<SignIn />} />
      <Route path={PATH.PROFILE_PAGE} element={<Profile />} />
      <Route path={PATH.FORGOT_PASSWORD_PAGE} element={<ForgotPasswordPage />} />
    </Routes>
  </div>
);

export default App;
