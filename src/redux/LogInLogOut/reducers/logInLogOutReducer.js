import { reducerUtils, handleAsyncActions } from '@/common/lib/util/asyncUtils';
import {
  POST_LOGIN,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_ERROR,
  REMOVE_ACCESS_TOKEN
} from '@/redux/LogInLogOut/type/logInLogOutType';

const initialState = {
  accessToken: null,
  registerState: null,
  logIn: reducerUtils.initial()
};

const logInLogOutReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_LOGIN:
    case POST_LOGIN_ERROR:
      return handleAsyncActions(POST_LOGIN, 'logIn')(state, action);
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        logIn: reducerUtils.success(action.payload),
        accessToken: action.payload.data.accessToken,
        registerState: action.payload.data.registerState
      };
    case REMOVE_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: null
      };
    default:
      return state;
  }
};

export { logInLogOutReducer };
