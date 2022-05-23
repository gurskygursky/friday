import { ACTIONS_TYPE } from 'enums/actions';

const initialState = {
  profile: {
    _id: '',
    avatar: null as string | null,
    name: '',
    email: '',
    publicCardPacksCount: null as number | null,
    created: null as Date | null,
    updated: null as Date | null,
    isAdmin: null as boolean | null,
    verified: null as boolean | null,
    rememberMe: null as boolean | null,
    error: null as string | null,
  },
};

export const profileReducer = (
  state: InitialStateType = initialState,
  action: ActionsProfile,
): InitialStateType => {
  switch (action.type) {
    case ACTIONS_TYPE.SET_USER_DATA:
      return { ...state, ...action.payload };
    case ACTIONS_TYPE.SET_USER_PROFILE:
      return {
        profile: { ...state.profile, ...action.profile },
      };
    default:
      return state;
  }
};
export const setUserDataAC = (_id: string, name: string, avatar: string) =>
  ({ type: ACTIONS_TYPE.SET_USER_DATA, payload: { _id, name, avatar } } as const);
export const setUserProfileAC = (profile: ResponseDataType) =>
  ({ type: ACTIONS_TYPE.SET_USER_PROFILE, profile } as const);

type ResponseDataType = null | {
  _id: string;
  email: string;
  name: string;
  avatar?: string | null;
  publicCardPacksCount: number;

  created: Date | null;
  updated: Date | null;
  isAdmin: boolean;
  verified: boolean;
  rememberMe: boolean;

  error?: string;
};

export type InitialStateType = typeof initialState;

export type ActionsProfile =
  | ReturnType<typeof setUserDataAC>
  | ReturnType<typeof setUserProfileAC>;
