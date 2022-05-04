import { Dispatch } from 'redux';

import { AddNewPasswordType, forgotPasswordAPI } from 'api/forgot-password-api';
import { requestStatus } from 'enums/request';
import { setAppStatusAC } from 'store/reducers/app-reducer';

export const forgotPasswordAddEmailTC =
  (dataPayload: AddNewPasswordType, setShowMessage: any) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC(requestStatus.loading));
    forgotPasswordAPI.addNewPassword(dataPayload).then(() => {
      setShowMessage(true);
      dispatch(setAppStatusAC(requestStatus.succeeded));
    });
  };
