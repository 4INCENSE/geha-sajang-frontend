import axios from 'axios';
import { createPromiseThunk } from '@/lib/util/asyncUtils';
import { POST_CREATE_ACCOUNT, REMOVE_CREATE_ACCOUNT_DATA } from '@/redux/Registration/type/registerType';

export const postCreateAccountAPI = async (formData) => {
  const response = await axios.post(process.env.POST_CREATE_ACCOUNT, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return response;
};

export const postCreateAccount = createPromiseThunk(POST_CREATE_ACCOUNT, postCreateAccountAPI);

export const removeCreateAccountData = () => (dispatch) => {
  dispatch({ type: REMOVE_CREATE_ACCOUNT_DATA });
};
