import axios from 'axios';
import { createPromiseThunk } from '@/common/lib/util/asyncUtils';
import { POST_LOGIN } from '@/redux/LogInLogOut/type/logInLogOutType';
import { API_URL } from '@/common/config';
import { setCookie } from '@/common/lib/util/cookies';

const postLogInRequest = async (payload) => {
  const postData = { account: payload.account, password: payload.password };
  const response = await axios.post(API_URL.postLogIn, postData);
  setCookie('jwt', response.data.accessToken);
  setCookie('nickname', response.data.nickname);
  setCookie('profileImage', response.data.profileImage);
  localStorage.setItem('registerState', response.data.registerState);
  return response;
};

export const postLogIn = createPromiseThunk(POST_LOGIN, postLogInRequest);
