import axios from 'axios';

import { setExtraServiceList } from '@/redux/actions/extraServiceAction';

const registerGuestHouseInfoMiddleware = (store) => (dispatch) => (action) => {
  const params = { store, action, dispatch };

  if (action.type == 'ADD_EXTRA_SERVICE') return addExtraService(params);
  if (action.type == 'DELETE_EXTRA_SERVICE') return deleteExtraService(params);
  if (action.type == 'POST_GUEST_HOUSE_INFO') return postGuestHouseInfo(params);
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

const postGuestHouseInfo = ({ store, action }) => {
  const payload = action.payload;
  const { extraServiceList } = store.getState().registerGuestHouseInfoReducer;

  const formData = new FormData();
  formData.append('name', payload.name);
  formData.append('mainNumber', payload.mainNumber);
  formData.append('extra', putSeparator(extraServiceList));
  formData.append('image', payload.image);

  axios
    .post(process.env.POST_GUESTHOUSE_INFO, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
    .then((response) => {
      if (response.status === 400) {
        alert("서버 등록 오류! \n'" + response.message + "'\n처음 화면으로 돌아갑니다");
        location.reload();
      }
      if (response.status === 500) {
        alert("서버 등록 오류! \n'" + response.message + "'\n처음 화면으로 돌아갑니다");
        location.reload();
      }
    });
};

const putSeparator = (array) => {
  const separator = '☆§♥♨☎';
  return array.join(separator);
};
