const initialState = {
  extraServiceList: []
};

const resisterGuestHouseInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EXTRA_SERVICE_LIST':
      return {
        ...state,
        extraServiceList: action.payload
      };
    default:
      return state;
  }
};

export { resisterGuestHouseInfoReducer };