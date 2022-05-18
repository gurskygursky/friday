import { Nullable } from 'components/types';
import { ACTIONS_TYPE } from 'enums/actions';

export const initialState: InitialStateType = {
  serverError: null,
  networkError: null,
};

export const errorsReducer = (
  state: InitialStateType = initialState,
  action: ActionsErrors,
): InitialStateType => {
  switch (action.type) {
    case ACTIONS_TYPE.SERVER_ERROR:
      return { ...state, serverError: action.serverError };
    case ACTIONS_TYPE.NETWORK_ERROR:
      return { ...state, networkError: action.networkError };
    default:
      return { ...state };
  }
};

// actions

export const setServerErrorAC = (serverError: Nullable<string>) =>
  ({ type: ACTIONS_TYPE.SERVER_ERROR, serverError } as const);
export const setNetworkErrorAC = (networkError: Nullable<string>) =>
  ({ type: ACTIONS_TYPE.NETWORK_ERROR, networkError } as const);

// types

export type InitialStateType = {
  serverError?: Nullable<string>;
  networkError?: Nullable<string>;
};

export type ActionsErrors =
  | ReturnType<typeof setServerErrorAC>
  | ReturnType<typeof setNetworkErrorAC>;
