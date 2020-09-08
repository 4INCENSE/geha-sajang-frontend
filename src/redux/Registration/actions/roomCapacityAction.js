import {
  INCREASE_CAPACITY,
  DECREASE_CAPACITY,
  SET_CAPACITY,
  INCREASE_MAX_CAPACITY,
  DECREASE_MAX_CAPACITY,
  SET_MAX_CAPACITY
} from '@/redux/Registration/type/registerType';

export const increaseCapacity = () => (dispatch, getState) => {
  const { roomCapacity, roomMaxCapacity } = getState().registerGuestHouseReducer;
  if (roomCapacity >= 99) return;
  dispatch(setCapacity(roomCapacity + 1));
  if (roomCapacity < roomMaxCapacity) return;
  dispatch(setMaxCapacity(roomMaxCapacity + 1));
};

export const decreaseCapacity = () => (dispatch, getState) => {
  const { roomCapacity } = getState().registerGuestHouseReducer;
  if (roomCapacity <= 0) return;
  dispatch(setCapacity(roomCapacity - 1));
};

export const increaseMaxCapacity = () => (dispatch, getState) => {
  const { roomMaxCapacity } = getState().registerGuestHouseReducer;
  if (roomMaxCapacity >= 99) return;
  dispatch(setMaxCapacity(roomMaxCapacity + 1));
};

export const decreaseMaxCapacity = () => (dispatch, getState) => {
  const { roomCapacity, roomMaxCapacity } = getState().registerGuestHouseReducer;
  if (roomCapacity >= roomMaxCapacity) return;
  if (roomMaxCapacity <= 0) return;
  dispatch(setMaxCapacity(roomMaxCapacity - 1));
};

export const setCapacity = (payload) => (dispatch, getState) => {
  const { roomCapacity, roomMaxCapacity } = getState().registerGuestHouseReducer;
  if (payload > roomMaxCapacity) dispatch(setMaxCapacity(payload));
  dispatch({
    type: SET_CAPACITY,
    payload: payload
  });
};

export const setMaxCapacity = (payload) => (dispatch, getState) => {
  dispatch({
    type: SET_MAX_CAPACITY,
    payload: payload
  });
};
