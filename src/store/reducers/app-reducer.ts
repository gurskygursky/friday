import { Nullable } from 'components/types';
import { ACTIONS_TYPE } from 'enums/actions';
import { requestStatus, RequestStatusType } from 'enums/request';

export const initialState: InitialStateType = {
  status: requestStatus.idle,
  error: null,
  isInitialized: false,
};

export const appReducer = (
  state: InitialStateType = initialState,
  action: ActionsApp,
): InitialStateType => {
  switch (action.type) {
    case ACTIONS_TYPE.SET_APP_STATUS:
      return { ...state, status: action.status };
    case ACTIONS_TYPE.SET_APP_ERROR:
      return { ...state, error: action.error };
    case ACTIONS_TYPE.APP_IS_INITIALIZED:
      return { ...state, isInitialized: action.isInitialized };
    default:
      return { ...state };
  }
};

// actions

export const setAppStatusAC = (status: RequestStatusType) =>
  ({ type: ACTIONS_TYPE.SET_APP_STATUS, status } as const);
export const setAppErrorAC = (error: Nullable<string>) =>
  ({ type: ACTIONS_TYPE.SET_APP_ERROR, error } as const);
export const setAppInitializedAC = (isInitialized: boolean) =>
  ({ type: ACTIONS_TYPE.APP_IS_INITIALIZED, isInitialized } as const);

// types

export type InitialStateType = {
  status: RequestStatusType;
  error: Nullable<string>;
  isInitialized: boolean;
};

export type ActionsApp =
  | ReturnType<typeof setAppStatusAC>
  | ReturnType<typeof setAppErrorAC>
  | ReturnType<typeof setAppInitializedAC>;
