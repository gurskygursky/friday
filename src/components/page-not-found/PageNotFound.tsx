import React from 'react';

import { NavLink } from 'react-router-dom';

import s from './PageNotFound.module.css';

import { PATH } from 'enums/pathes';

export const PageNotFound = () => (
  <div className={s.mainContainer}>
    <div className={s.textContainer}>
      <span>404: </span>
      <span>PAGE NOT FOUND</span>
    </div>
    <div className={s.textContainer_2}>
      lost in space you have reached the edge of the universe
    </div>
    <NavLink to={PATH.LOGIN_PAGE}>
      <button className={s.btn} type="button" disabled>
        Back
      </button>
    </NavLink>
  </div>
);
