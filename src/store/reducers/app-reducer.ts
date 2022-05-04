// const initialState = {};
//
// // Use the initialState as a default value
// export const appReducer = (state = initialState, action: any) => {
//   // The reducer normally looks at the action type field to decide what happens
//   switch (action.type) {
//     // Do something here based on the different types of actions
//     default:
//       // If this reducer doesn't recognize the action type, or doesn't
//       // care about this specific action, return the existing state unchanged
//       return state;
//   }
// };

import { Nullable } from 'components/types';
import { requestStatus, RequestStatusType } from 'enums/request';

export const initialState: InitialStateType = {
  status: requestStatus.idle,
  error: null,
  isInitialized: false,
};

export const appReducer = (
  state: InitialStateType = initialState,
  action: ActionTypes,
): InitialStateType => {
  switch (action.type) {
    case 'APP/SET_STATUS':
      return { ...state, status: action.status };
    default:
      return { ...state };
  }
};

export const setAppStatusAC = (status: RequestStatusType) =>
  ({ type: 'APP/SET_STATUS', status } as const);

// types

export type InitialStateType = {
  // взаимодействие с сервером
  status: RequestStatusType;
  // если ошибка
  error: Nullable<string>;
  isInitialized: boolean;
};
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>;

type ActionTypes = SetAppStatusActionType;
