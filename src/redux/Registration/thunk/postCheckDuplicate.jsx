import axios from 'axios';
import { createPromiseThunk } from '@/lib/util/asyncUtils';
import { CHECK_EMAIL, CHECK_NAME } from '@/redux/Registration/type/registerType';

export const postCheckEmailAPI = async (payload) => {
  const postData = { email: payload };
  const response = await axios.post(process.env.POST_CHECK_EMAIL, postData);
  return response;
};

export const postCheckEmail = createPromiseThunk(CHECK_EMAIL, postCheckEmailAPI);

export const postCheckNameAPI = async (payload) => {
  const postData = { nickname: payload };
  const response = await axios.post(process.env.POST_CHECK_NAME, postData);
  return response;
};

export const postCheckName = createPromiseThunk(CHECK_NAME, postCheckNameAPI);
