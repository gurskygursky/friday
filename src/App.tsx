import React from 'react';

import './App.css';

import { Route, Routes } from 'react-router-dom';

import { ForgotPasswordPage, SignUp, SignIn } from 'components/authorization';
import { PageNotFound } from 'components/page-not-found';
import { Profile } from 'components/profile';
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
