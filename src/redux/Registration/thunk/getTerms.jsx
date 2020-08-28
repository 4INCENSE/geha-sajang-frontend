import axios from 'axios';
import { createPromiseThunk } from '@/lib/util/asyncUtils';
import { GET_TERMS } from '@/redux/Registration/type/registerType';

export const getTermsAPI = async () => {
  const response = await axios.get(process.env.GET_TERMS);
  return response.data;
};

export const getTerms = createPromiseThunk(GET_TERMS, getTermsAPI);
