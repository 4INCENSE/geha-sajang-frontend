import { SET_ROOM_LIST } from '@/redux/Registration/type/registerType';
import { setCapacity, setMaxCapacity } from '@/redux/Registration/actions/roomCapacityAction';

const addRoom = (payload) => (dispatch, getState) => {
  const addedRoomArray = addRoomToArray(getState, payload);
  dispatch(setRoomList(addedRoomArray));
  dispatch(setCapacity(0));
  dispatch(setMaxCapacity(0));
};

const addRoomToArray = (getState, payload) => {
  const { roomList } = getState().registerGuestHouseReducer;
  return roomList.concat(payload);
};

const setRoomList = (payload) => {
  return {
    type: SET_ROOM_LIST,
    payload
  };
};

export { addRoom };
