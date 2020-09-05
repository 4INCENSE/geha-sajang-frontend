import {
  INCREASE_CAPACITY,
  DECREASE_CAPACITY,
  SET_CAPACITY,
  INCREASE_MAX_CAPACITY,
  DECREASE_MAX_CAPACITY,
  SET_MAX_CAPACITY
} from '@/redux/Registration/type/registerType';

export const increaseCapacity = () => (dispatch, getState) => {
  const { roomCapacity } = getState().registerGuestHouseReducer;
  dispatch(setCapacity(roomCapacity + 1));
};

export const decreaseCapacity = () => (dispatch, getState) => {
  const { roomCapacity } = getState().registerGuestHouseReducer;
  dispatch(setCapacity(roomCapacity - 1));
};

export const setCapacity = (payload) => (dispatch, getState) => {
  dispatch({
    type: SET_CAPACITY,
    payload: payload
  });
};

export const increaseMaxCapacity = () => (dispatch, getState) => {
  const { roomMaxCapacity } = getState().registerGuestHouseReducer;
  dispatch(setMaxCapacity(roomMaxCapacity + 1));
};

export const decreaseMaxCapacity = () => (dispatch, getState) => {
  const { roomMaxCapacity } = getState().registerGuestHouseReducer;
  dispatch(setMaxCapacity(roomMaxCapacity - 1));
};

export const setMaxCapacity = (payload) => (dispatch, getState) => {
  dispatch({
    type: SET_MAX_CAPACITY,
    payload: payload
  });
};
