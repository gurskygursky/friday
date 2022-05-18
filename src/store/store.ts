import { useDispatch } from 'react-redux';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';

import {
  appReducer,
  cardsReducer,
  errorsReducer,
  profileReducer,
  signInReducer,
  signUpReducer,
} from 'store/reducers';
import { ActionsApp } from 'store/reducers/app-reducer';
import { ActionsSignIn } from 'store/reducers/signIn-reducer';

const rootReducer = combineReducers({
  app: appReducer,
  signIn: signInReducer,
  signUp: signUpReducer,
  profilePage: profileReducer,
  cards: cardsReducer,
  errors: errorsReducer,
});
// applyMiddleware supercharges createStore with middleware:
export const store = createStore(rootReducer, applyMiddleware(thunk));

export const useAppDispatch = () => useDispatch<AppDispatch>();

type AppState = ReturnType<typeof rootReducer>;
type AppActions = ActionsSignIn | ActionsApp;
type AppDispatch = ThunkDispatch<AppState, any, AppActions>;
export type { AppState, AppDispatch, AppActions };

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
