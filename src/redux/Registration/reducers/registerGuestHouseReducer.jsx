import { reducerUtils, handleAsyncActions } from '@/lib/util/asyncUtils';
import {
  POST_GUEST_HOUSE_INFO,
  POST_GUEST_HOUSE_INFO_SUCCESS,
  POST_GUEST_HOUSE_INFO_ERROR
} from '@/redux/Registration/type/registerType';

const initialState = {
  extraServiceList: [],
  postGuestHouseInfo: reducerUtils.initial()
};

const registerGuestHouseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EXTRA_SERVICE_LIST':
      return {
        ...state,
        extraServiceList: action.payload
      };
    case POST_GUEST_HOUSE_INFO:
    case POST_GUEST_HOUSE_INFO_SUCCESS:
    case POST_GUEST_HOUSE_INFO_ERROR:
      const reducer = handleAsyncActions(POST_GUEST_HOUSE_INFO, 'postGuestHouseInfo');
      return reducer(state, action);
    default:
      return state;
  }
};

export { registerGuestHouseReducer };
