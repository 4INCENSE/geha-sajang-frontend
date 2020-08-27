import axios from 'axios';
import { createPromiseThunk } from '@/lib/util/asyncUtils';
import { POST_GUEST_HOUSE_INFO } from '@/redux/Registration/type/registerType';

export const postGuestHouseInfoAPI = async (formData) => {
  const response = await axios.post(process.env.POST_GUESTHOUSE_INFO, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return response;
};

export const postGuestHouseInfo = createPromiseThunk(POST_GUEST_HOUSE_INFO, postGuestHouseInfoAPI);
