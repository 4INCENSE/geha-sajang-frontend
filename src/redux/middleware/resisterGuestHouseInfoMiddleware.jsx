import { setExtraServiceList } from '@/redux/actions/extraServiceAction';

const resisterGuestHouseInfoMiddleware = (store) => (dispatch) => (action) => {
  if (action.type == 'ADD_EXTRA_SERVICE') return dispatch(setExtraServiceList(addExtraService(store, action.payload)));
  if (action.type == 'DELETE_EXTRA_SERVICE')
    return dispatch(setExtraServiceList(deleteExtraService(store, action.payload)));
};
export { resisterGuestHouseInfoMiddleware };

const addExtraService = (store, payload) => {
  const { extraServiceList } = store.getState().resisterGuestHouseInfoReducer;
  return extraServiceList.concat(payload);
};

const deleteExtraService = (store, payload) => {
  const { extraServiceList } = store.getState().resisterGuestHouseInfoReducer;
  const deleteIndex = extraServiceList.findIndex((service) => service == payload);
  extraServiceList.splice(deleteIndex, 1);
  return extraServiceList;
};
