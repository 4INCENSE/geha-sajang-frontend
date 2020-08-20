import { setExtraServiceList } from '@/redux/actions/extraServiceAction';

const registerGuestHouseInfoMiddleware = (store) => (dispatch) => (action) => {
  if (action.type == 'ADD_EXTRA_SERVICE') return dispatch(setExtraServiceList(addExtraService(store, action.payload)));
  if (action.type == 'DELETE_EXTRA_SERVICE')
    return dispatch(setExtraServiceList(deleteExtraService(store, action.payload)));
};
export { registerGuestHouseInfoMiddleware };

const addExtraService = (store, payload) => {
  const { extraServiceList } = store.getState().registerGuestHouseInfoReducer;
  return extraServiceList.concat(payload);
};

const deleteExtraService = (store, payload) => {
  const { extraServiceList } = store.getState().registerGuestHouseInfoReducer;
  const deleteIndex = extraServiceList.findIndex((service) => service == payload);
  extraServiceList.splice(deleteIndex, 1);
  return extraServiceList;
};
