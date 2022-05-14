import { ACTIONS_TYPE } from 'enums/actions';

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

// Use the initialState as a default value
export const signUpReducer = (
  state = initialState,
  action: SignUpActionTypes,
): InitialStateType => {
  // The reducer normally looks at the action type field to decide what happens
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
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
};

type SignUpActionTypes =
  | ReturnType<typeof toggleIsFetchingAC>
  | ReturnType<typeof toggleIsSignUpAC>;
