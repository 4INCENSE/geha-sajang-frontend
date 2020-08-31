const addExtraService = (payload) => (dispatch, getState) => {
  const addedExtraServiceArray = addServiceToArray(getState, payload);
  dispatch(setExtraServiceList(addedExtraServiceArray));
};

const addServiceToArray = (getState, payload) => {
  const { extraServiceList } = getState().registerGuestHouseReducer;
  return extraServiceList.concat(payload);
};

const deleteExtraService = (payload) => (dispatch, getState) => {
  const deletedExtraServiceArray = deleteServiceFromArray(getState, payload);
  dispatch(setExtraServiceList(deletedExtraServiceArray));
};

const deleteServiceFromArray = (getState, payload) => {
  const { extraServiceList } = getState().registerGuestHouseReducer;
  const deleteIndex = extraServiceList.findIndex((service) => service == payload);
  extraServiceList.splice(deleteIndex, 1);
  return extraServiceList;
};

const setExtraServiceList = (payload) => {
  return {
    type: 'SET_EXTRA_SERVICE_LIST',
    payload
  };
};

export { addExtraService, deleteExtraService, setExtraServiceList };
