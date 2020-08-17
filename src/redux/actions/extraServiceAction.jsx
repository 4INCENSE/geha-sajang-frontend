export const addExtraService = (payload) => {
  return {
    type: 'ADD_EXTRA_SERVICE',
    payload
  };
};

export const deleteExtraService = (payload) => {
  return {
    type: 'DELETE_EXTRA_SERVICE',
    payload
  };
};

export const setExtraServiceList = (payload) => {
  return {
    type: 'SET_EXTRA_SERVICE_LIST',
    payload
  };
};
