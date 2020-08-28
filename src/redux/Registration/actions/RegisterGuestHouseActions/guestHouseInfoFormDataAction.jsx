import { postGuestHouseInfo } from '@/redux/Registration/thunk/postGuestHouseInfo';

export const guestHouseInfoFormData = (payload) => (dispatch, getState) => {
  const { extraServiceList } = getState().registerGuestHouseReducer;

  const formData = new FormData();
  formData.append('name', payload.name);
  formData.append('mainNumber', payload.mainNumber);
  formData.append('extra', putSeparator(extraServiceList));
  formData.append('image', payload.image);

  return dispatch(postGuestHouseInfo(formData));
};

const putSeparator = (array) => {
  const separator = '☆§♥♨☎';
  return array.join(separator);
};
