import axios from 'axios';
import { createPromiseThunk } from '@/common/lib/util/asyncUtils';
import { POST_RESEND_EMAIL } from '@/redux/LogInLogOut/type/logInLogOutType';
import { API_URL } from '@/common/config';

const postResendEmailRequest = async (payload) => {
  const postData = { email: payload };
  const response = await axios.post(API_URL.postResendEmail, postData);
  return response;
};

export const postResendEmail = createPromiseThunk(POST_RESEND_EMAIL, postResendEmailRequest);
