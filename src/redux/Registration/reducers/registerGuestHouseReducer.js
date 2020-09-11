import { reducerUtils, handleAsyncActions } from '@/common/lib/util/asyncUtils';
import {
  SET_EXTRA_SERVICE_LIST,
  POST_GUEST_HOUSE_INFO,
  POST_GUEST_HOUSE_INFO_SUCCESS,
  POST_GUEST_HOUSE_INFO_ERROR,
  SET_CAPACITY,
  SET_MAX_CAPACITY,
  SET_ROOM_LIST
} from '@/redux/Registration/type/registerType';

const initialState = {
  extraServiceList: [],
  guestHouseInfo: reducerUtils.initial(),
  roomCapacity: 0,
  roomMaxCapacity: 0,
  roomList: []
};

const registerGuestHouseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EXTRA_SERVICE_LIST:
      return {
        ...state,
        extraServiceList: action.payload
      };
    case POST_GUEST_HOUSE_INFO:
    case POST_GUEST_HOUSE_INFO_SUCCESS:
    case POST_GUEST_HOUSE_INFO_ERROR:
      return handleAsyncActions(POST_GUEST_HOUSE_INFO, 'guestHouseInfo')(state, action);
    case SET_CAPACITY:
      return {
        ...state,
        roomCapacity: action.payload
      };
    case SET_MAX_CAPACITY:
      return {
        ...state,
        roomMaxCapacity: action.payload
      };
    case SET_ROOM_LIST:
      return {
        ...state,
        roomList: action.payload
      };
    default:
      return state;
  }
};

export { registerGuestHouseReducer };
