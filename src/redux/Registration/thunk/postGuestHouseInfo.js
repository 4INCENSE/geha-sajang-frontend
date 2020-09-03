import axios from 'axios';
import { createPromiseThunk } from '@/common/lib/util/asyncUtils';
import { POST_GUEST_HOUSE_INFO } from '@/redux/Registration/type/registerType';
import { API_URL } from '@/common/config';

export const postGuestHouseInfoRequest = async (formData) => {
  const accessToken = localStorage.getItem('jwt');
  const response = await axios.post(API_URL.postGuestHouseInfo, formData, {
    headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${accessToken}` }
  });
  return response;
};

export const postGuestHouseInfo = createPromiseThunk(POST_GUEST_HOUSE_INFO, postGuestHouseInfoRequest);
