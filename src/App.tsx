import React from 'react';

import './App.css';

import { Route, Routes } from 'react-router-dom';

import { SignIn } from 'components/Login/SignIn';
import { PageNotFound } from 'components/PageNotFound/PageNotFound';
import { SignUp } from 'components/SignUp/SignUp';
import { PATH } from 'enums/pathes';

const App = () => (
  <div>
    <Routes>
      <Route path={PATH.PAGE_NOT_FOUND} element={<PageNotFound />} />
      <Route path={PATH.REGISTRATION_PAGE} element={<SignUp />} />
      <Route path={PATH.LOGIN_PAGE} element={<SignIn />} />
    </Routes>
  </div>
);

export default App;
