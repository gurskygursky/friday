import { ThunkDispatch } from 'redux-thunk';

import { setAppStatusAC } from './app-reducer';

import { authAPI, LoginParamsType } from 'api/auth-api';
import { Nullable } from 'components/types';
import { ACTIONS_TYPE } from 'enums/actions';
import { requestStatus } from 'enums/request';
import { RootStoreType } from 'store/store';

export type InitialStateDataType = {
  isAuth: boolean;
  error?: Nullable<string>;
};

export const initialState: InitialStateDataType = {
  isAuth: false,
  error: null,
};

export const signInReducer = (
  state: InitialStateDataType = initialState,
  action: ActionTypesSignIn,
): InitialStateDataType => {
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

export const SignInTC =
  (data: LoginParamsType) =>
  (
    dispatch: ThunkDispatch<
      RootStoreType,
      undefined,
      ActionTypesSignIn | ReturnType<typeof setAppStatusAC>
    >,
  ) => {
    dispatch(setAppStatusAC(requestStatus.loading));
    authAPI
      .login(data)
      .then(() => {
        dispatch(setAuthSignInDataAC(true));
        // dispatch(setUserProfile(res.data));
        dispatch(setAppStatusAC(requestStatus.succeeded));
      })
      .catch(() => {})
      .finally(() => {
        dispatch(setAppStatusAC(requestStatus.idle));
      });
  };

// type;
export type setLoginData = ReturnType<typeof setAuthSignInDataAC>;
type setErrorMessageLogin = ReturnType<typeof setErrorMessageAC>;
export type ActionTypesSignIn = setLoginData | setErrorMessageLogin;
