import axios from 'axios';
import { createPromiseThunk } from '@/common/lib/util/asyncUtils';
import { POST_CREATE_ACCOUNT, REMOVE_CREATE_ACCOUNT_DATA } from '@/redux/Registration/type/registerType';
import { API_URL } from '@/common/config';

export const postCreateAccountAPI = async (formData) => {
  const response = await axios.post(API_URL.postCreateAccount, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return response;
};

export const postCreateAccount = createPromiseThunk(POST_CREATE_ACCOUNT, postCreateAccountAPI);

export const removeCreateAccountData = () => (dispatch) => {
  dispatch({ type: REMOVE_CREATE_ACCOUNT_DATA });
};
