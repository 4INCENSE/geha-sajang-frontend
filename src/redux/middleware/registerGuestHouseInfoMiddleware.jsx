
import { setExtraServiceList } from '@/redux/actions/extraServiceAction';

const registerGuestHouseInfoMiddleware = (store) => (dispatch) => (action) => {
  const params = { store, action, dispatch };

  if (action.type == 'ADD_EXTRA_SERVICE') return addExtraService(params);
  if (action.type == 'DELETE_EXTRA_SERVICE') return deleteExtraService(params);
};

export { registerGuestHouseInfoMiddleware };

const addExtraService = ({ store, action, dispatch }) => {
  dispatch(setExtraServiceList(addServiceToArray(store, action.payload)));
};

const addServiceToArray = (store, payload) => {
  const { extraServiceList } = store.getState().registerGuestHouseInfoReducer;
  return extraServiceList.concat(payload);
};

const deleteExtraService = ({ store, action, dispatch }) => {
  dispatch(setExtraServiceList(deleteServiceFromArray(store, action.payload)));
};

const deleteServiceFromArray = (store, payload) => {
  const { extraServiceList } = store.getState().registerGuestHouseInfoReducer;
  const deleteIndex = extraServiceList.findIndex((service) => service == payload);
  extraServiceList.splice(deleteIndex, 1);
  return extraServiceList;
};
