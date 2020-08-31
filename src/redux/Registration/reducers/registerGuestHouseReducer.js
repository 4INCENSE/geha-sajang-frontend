import { reducerUtils, handleAsyncActions } from '@/common/lib/util/asyncUtils';
import {
  POST_GUEST_HOUSE_INFO,
  POST_GUEST_HOUSE_INFO_SUCCESS,
  POST_GUEST_HOUSE_INFO_ERROR
} from '@/redux/Registration/type/registerType';

const initialState = {
  extraServiceList: [],
  guestHouseInfo: reducerUtils.initial()
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
      return handleAsyncActions(POST_GUEST_HOUSE_INFO, 'guestHouseInfo')(state, action);
    default:
      return state;
  }
};

export { registerGuestHouseReducer };
