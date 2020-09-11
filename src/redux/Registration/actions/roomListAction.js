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

const deleteRoom = (deleteIndex) => (dispatch, getState) => {
  const { roomList } = getState().registerGuestHouseReducer;
  roomList.splice(deleteIndex, 1);
  return dispatch(setRoomList(roomList));
};

const editRoom = (editIndex, editedRoomData) => (dispatch, getState) => {
  const { roomList } = getState().registerGuestHouseReducer;
  roomList[editIndex] = editedRoomData;
  dispatch(setCapacity(0));
  dispatch(setMaxCapacity(0));
  dispatch(setRoomList(roomList));
  return;
};

const setRoomList = (payload) => {
  return {
    type: SET_ROOM_LIST,
    payload
  };
};

export { addRoom, deleteRoom, editRoom };
