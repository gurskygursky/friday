import { forgotPasswordAPI, SetNewPasswordType } from 'api/forgot-password-api';
import { requestStatus } from 'enums/request';
import { setAppStatusAC } from 'store/reducers/app-reducer';
import { setNetworkErrorAC } from 'store/reducers/errors-reducer';
import { AppDispatch } from 'store/store';

export const SetNewPasswordTC =
  (params: SetNewPasswordType) => (dispatch: AppDispatch) => {
    dispatch(setAppStatusAC(requestStatus.loading));
    forgotPasswordAPI
      .set(params)
      .then(() => {
        dispatch(setAppStatusAC(requestStatus.succeeded));
      })
      .catch(e => {
        dispatch(setAppStatusAC(requestStatus.succeeded));
        const networkError = e.response
          ? e.response.data.error
          : `${e.message}, more details in the console`;
        dispatch(setNetworkErrorAC(networkError));
      })
      .finally(() => {
        dispatch(setAppStatusAC(requestStatus.idle));
      });
  };
