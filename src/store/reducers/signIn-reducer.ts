import { setAppStatusAC } from './app-reducer';

import { authAPI, LoginParamsType } from 'api/auth-api';
import { Nullable } from 'components/types';
import { ACTIONS_TYPE } from 'enums/actions';
import { requestStatus } from 'enums/request';
import { AppDispatch } from 'store/store';

export type InitialStateType = {
  isAuth: boolean;
  error?: Nullable<string>;
};

export const initialState: InitialStateType = {
  isAuth: false,
  error: null,
};

export const signInReducer = (state = initialState, action: ActionsSignIn) => {
  switch (action.type) {
    case ACTIONS_TYPE.SET_AUTH_SIGN_IN_DATA:
      return {
        ...state,
        isAuth: action.isAuth,
      };
    case ACTIONS_TYPE.SET_ERROR_MESSAGE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export const setAuthSignInDataAC = (isAuth: boolean) =>
  ({ type: ACTIONS_TYPE.SET_AUTH_SIGN_IN_DATA, isAuth } as const);

export const setErrorMessageAC = (error: Nullable<string>) =>
  ({ type: ACTIONS_TYPE.SET_ERROR_MESSAGE, error } as const);

export const SignInTC = (data: LoginParamsType) => (dispatch: AppDispatch) => {
  dispatch(setAppStatusAC(requestStatus.loading));
  authAPI
    .login(data)
    .then(() => {
      dispatch(setAuthSignInDataAC(true));
      dispatch(setAppStatusAC(requestStatus.succeeded));
    })
    .catch(() => {})
    .finally(() => {
      dispatch(setAppStatusAC(requestStatus.idle));
    });
};

// type;
export type ActionsSignIn =
  | ReturnType<typeof setAuthSignInDataAC>
  | ReturnType<typeof setErrorMessageAC>
  | ReturnType<typeof setAppStatusAC>;
