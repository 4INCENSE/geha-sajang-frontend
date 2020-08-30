import axios from 'axios';
import { createPromiseThunk } from '@/common/lib/util/asyncUtils';
import { GET_TERMS } from '@/redux/Registration/type/registerType';
import { API_URL } from '@/common/config';

export const getTermsAPI = async () => {
  const response = await axios.get(API_URL.getTerms);
  return response.data;
};

export const getTerms = createPromiseThunk(GET_TERMS, getTermsAPI);
