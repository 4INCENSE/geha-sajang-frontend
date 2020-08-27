import { reducerUtils, handleAsyncActions } from '@/lib/util/asyncUtils';
import { GET_TERMS, GET_TERMS_SUCCESS, GET_TERMS_ERROR } from '@/redux/Registration/type/registerType';

const initialState = {
  terms: reducerUtils.initial()
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TERMS:
    case GET_TERMS_SUCCESS:
    case GET_TERMS_ERROR:
      const reducer = handleAsyncActions(GET_TERMS, 'terms');
      return reducer(state, action);
    default:
      return state;
  }
};

export { registerReducer };
