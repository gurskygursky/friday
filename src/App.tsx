import React from 'react';

import './App.css';

import { Route, Routes } from 'react-router-dom';

import { PageNotFound } from 'components/PageNotFound/PageNotFound';
import { Profile } from 'components/Profile/Profile';
import { SignIn } from 'components/SignIn/SignIn';
import { SignUp } from 'components/SignUp/SignUp';
import { PATH } from 'enums/pathes';

const App = () => (
  <div>
    <Routes>
      <Route path={PATH.PAGE_NOT_FOUND} element={<PageNotFound />} />
      <Route path={PATH.REGISTRATION_PAGE} element={<SignUp />} />
      <Route path={PATH.LOGIN_PAGE} element={<SignIn />} />
      <Route path={PATH.PROFILE_PAGE} element={<Profile />} />
    </Routes>
  </div>
);

export default App;
