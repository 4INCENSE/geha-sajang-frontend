import { reducerUtils, handleAsyncActions } from '@/common/lib/util/asyncUtils';
import {
  POST_LOGIN,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_ERROR,
  POST_RESEND_EMAIL,
  POST_RESEND_EMAIL_SUCCESS,
  POST_RESEND_EMAIL_ERROR
} from '@/redux/LogInLogOut/type/logInLogOutType';

const initialState = {
  logIn: reducerUtils.initial(),
  resendEmail: reducerUtils.initial()
};

const logInLogOutReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_LOGIN:
    case POST_LOGIN_ERROR:
    case POST_LOGIN_SUCCESS:
      return handleAsyncActions(POST_LOGIN, 'logIn')(state, action);
    case POST_RESEND_EMAIL:
    case POST_RESEND_EMAIL_SUCCESS:
    case POST_RESEND_EMAIL_ERROR:
      return handleAsyncActions(POST_RESEND_EMAIL, 'resendEmail')(state, action);
    default:
      return state;
  }
};

export { logInLogOutReducer };
