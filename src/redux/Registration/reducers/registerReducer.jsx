import { reducerUtils, handleAsyncActions } from '@/lib/util/asyncUtils';
import * as registerType from '@/redux/Registration/type/registerType';

const {
  GET_TERMS,
  GET_TERMS_SUCCESS,
  GET_TERMS_ERROR,
  CHECK_EMAIL,
  CHECK_EMAIL_SUCCESS,
  CHECK_EMAIL_ERROR,
  CHECK_NAME,
  CHECK_NAME_SUCCESS,
  CHECK_NAME_ERROR,
  POST_CREATE_ACCOUNT,
  POST_CREATE_ACCOUNT_SUCCESS,
  POST_CREATE_ACCOUNT_ERROR,
  REMOVE_CREATE_ACCOUNT_DATA
} = registerType;

const initialState = {
  terms: reducerUtils.initial(),
  checkEmail: reducerUtils.initial(),
  checkName: reducerUtils.initial(),
  createAccount: reducerUtils.initial()
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TERMS:
    case GET_TERMS_SUCCESS:
    case GET_TERMS_ERROR:
      return handleAsyncActions(GET_TERMS, 'terms')(state, action);
    case CHECK_EMAIL:
    case CHECK_EMAIL_SUCCESS:
    case CHECK_EMAIL_ERROR:
      return handleAsyncActions(CHECK_EMAIL, 'checkEmail')(state, action);
    case CHECK_NAME:
    case CHECK_NAME_SUCCESS:
    case CHECK_NAME_ERROR:
      return handleAsyncActions(CHECK_NAME, 'checkName')(state, action);
    case POST_CREATE_ACCOUNT:
    case POST_CREATE_ACCOUNT_SUCCESS:
    case POST_CREATE_ACCOUNT_ERROR:
      return handleAsyncActions(POST_CREATE_ACCOUNT, 'createAccount')(state, action);
    case REMOVE_CREATE_ACCOUNT_DATA:
      return {
        ...state,
        createAccount: reducerUtils.initial()
      };
    default:
      return state;
  }
};

export { registerReducer };
