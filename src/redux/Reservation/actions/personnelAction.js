import { SET_MALE_COUNT, SET_FEMALE_COUNT } from '@/redux/Reservation/type/reservationType';

const decreaseMaleCount = (payload) => (dispatch, getState) => {
  const { maleCount } = getState().reservationReducer;
  if (maleCount <= 0) return;
  dispatch(setMaleCount(maleCount - 1));
};

const increaseMaleCount = (payload) => (dispatch, getState) => {
  const { maleCount } = getState().reservationReducer;
  if (maleCount >= 99) return;
  dispatch(setMaleCount(maleCount + 1));
};

const decreaseFemaleCount = (payload) => (dispatch, getState) => {
  const { femaleCount } = getState().reservationReducer;
  if (femaleCount <= 0) return;
  dispatch(setFemaleCount(femaleCount - 1));
};

const increaseFemaleCount = (payload) => (dispatch, getState) => {
  const { femaleCount } = getState().reservationReducer;
  if (femaleCount >= 99) return;
  dispatch(setFemaleCount(femaleCount + 1));
};

const resetAllCount = (payload) => (dispatch, getState) => {
  const { maleCount, femaleCount } = getState().reservationReducer;
  if (maleCount === 0 && femaleCount === 0) return;
  dispatch(setMaleCount(0));
  dispatch(setFemaleCount(0));
};

const setMaleCount = (payload) => {
  return {
    type: SET_MALE_COUNT,
    payload
  };
};

const setFemaleCount = (payload) => {
  return {
    type: SET_FEMALE_COUNT,
    payload
  };
};

export { decreaseMaleCount, increaseMaleCount, decreaseFemaleCount, increaseFemaleCount, resetAllCount };
