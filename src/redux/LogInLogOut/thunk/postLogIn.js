import axios from 'axios';
import { createPromiseThunk } from '@/common/lib/util/asyncUtils';
import { POST_LOGIN } from '@/redux/LogInLogOut/type/logInLogOutType';
import { API_URL } from '@/common/config';

const postLogInAPI = async (payload) => {
  const postData = { account: payload.account, password: payload.password };
  const response = await axios.post(API_URL.postLogIn, postData);
  return response;
};

export const postLogIn = createPromiseThunk(POST_LOGIN, postLogInAPI);
