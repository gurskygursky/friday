import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {
  appReducer,
  cardsReducer,
  profileReducer,
  signInReducer,
  signUpReducer,
} from 'store/reducers';

const rootReducer = combineReducers({
  app: appReducer,
  signIn: signInReducer,
  signUp: signUpReducer,
  profilePage: profileReducer,
  cards: cardsReducer,
});
// applyMiddleware supercharges createStore with middleware:
export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootStoreType = ReturnType<typeof rootReducer>;

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
