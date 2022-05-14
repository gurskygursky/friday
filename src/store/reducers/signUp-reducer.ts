import { Dispatch } from 'redux';

import { authAPI } from 'api';
import { RegisterParamsType } from 'api/auth-api';
import { ACTIONS_TYPE } from 'enums/actions';
import { requestStatus } from 'enums/request';
import { setAppStatusAC } from 'store/reducers/app-reducer';

type InitialStateType = typeof initialState;
const initialState = {
  isFetching: false,
  isSignUp: false,
};

export const toggleIsFetchingAC = (isFetching: boolean) =>
  ({
    type: ACTIONS_TYPE.REGISTRATION_IS_FETCHING,
    isFetching,
  } as const);
export const toggleIsSignUpAC = (isSignUpSuccessful: boolean) =>
  ({
    type: ACTIONS_TYPE.REGISTRATION_IS_SIGNUP_SUCCESSFUL,
    isSignUpSuccessful,
  } as const);
export const setErrorAC = (error: null | string) =>
  ({ type: 'RECOVERY/ERROR', payload: { error } } as const);

export const signUpReducer = (
  state = initialState,
  action: SignUpActionTypes,
): InitialStateType => {
  switch (action.type) {
    case ACTIONS_TYPE.REGISTRATION_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case ACTIONS_TYPE.REGISTRATION_IS_SIGNUP_SUCCESSFUL:
      return {
        ...state,
        isSignUp: action.isSignUpSuccessful,
      };
    default:
      return state;
  }
};

export const signUpTC =
  (params: RegisterParamsType) =>
  (dispatch: Dispatch<SignUpActionTypes | ReturnType<typeof setAppStatusAC>>) => {
    dispatch(toggleIsFetchingAC(true));
    dispatch(setAppStatusAC(requestStatus.loading));
    authAPI
      .registration(params)
      .then(() => {
        dispatch(toggleIsSignUpAC(true));
        dispatch(setAppStatusAC(requestStatus.succeeded));
      })
      .catch(() => {
        dispatch(setErrorAC('LOL'));
      })
      .finally(() => {
        dispatch(toggleIsFetchingAC(false));
      });
  };

type SignUpActionTypes =
  | ReturnType<typeof toggleIsFetchingAC>
  | ReturnType<typeof toggleIsSignUpAC>
  | ReturnType<typeof setErrorAC>;
