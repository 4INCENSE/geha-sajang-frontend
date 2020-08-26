export const addExtraService = (payload) => (dispatch, getState) => {
  const addedExtraServiceArray = addServiceToArray(getState, payload);
  dispatch(setExtraServiceList(addedExtraServiceArray));
};

const addServiceToArray = (getState, payload) => {
  const { extraServiceList } = getState().registerGuestHouseInfoReducer;
  return extraServiceList.concat(payload);
};

export const deleteExtraService = (payload) => (dispatch, getState) => {
  const deletedExtraServiceArray = deleteServiceFromArray(getState, payload);
  dispatch(setExtraServiceList(deletedExtraServiceArray));
};

const deleteServiceFromArray = (getState, payload) => {
  const { extraServiceList } = getState().registerGuestHouseInfoReducer;
  const deleteIndex = extraServiceList.findIndex((service) => service == payload);
  extraServiceList.splice(deleteIndex, 1);
  return extraServiceList;
};

export const setExtraServiceList = (payload) => {
  return {
    type: 'SET_EXTRA_SERVICE_LIST',
    payload
  };
};
