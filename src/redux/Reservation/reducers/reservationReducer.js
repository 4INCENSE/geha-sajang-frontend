import { reducerUtils, handleAsyncActions } from '@/common/lib/util/asyncUtils';
import * as reservationType from '@/redux/Reservation/type/reservationType';

const { SET_MALE_COUNT, SET_FEMALE_COUNT } = reservationType;

const initialState = {
  maleCount: 0,
  femaleCount: 0
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MALE_COUNT:
      return { ...state, maleCount: action.payload };
    case SET_FEMALE_COUNT:
      return { ...state, femaleCount: action.payload };
    default:
      return state;
  }
};

export { reservationReducer };
