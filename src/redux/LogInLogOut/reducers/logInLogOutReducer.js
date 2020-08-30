import { reducerUtils, handleAsyncActions } from '@/common/lib/util/asyncUtils';
import { POST_LOGIN, POST_LOGIN_SUCCESS, POST_LOGIN_ERROR } from '@/redux/LogInLogOut/type/LogInLogOutType';

const initialState = {
  accessToken: null,
  logIn: reducerUtils.initial()
};

const logInLogOutReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_LOGIN:
    case POST_LOGIN_SUCCESS:
    case POST_LOGIN_ERROR:
      return handleAsyncActions(POST_LOGIN, 'logIn')(state, action);
    default:
      return state;
  }
};

export { logInLogOutReducer };
