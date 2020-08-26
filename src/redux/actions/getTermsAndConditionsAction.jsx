import axios from 'axios';
import { loading, success, error } from '@/redux/actions/apiAction';

export const getTermsAndConditions = (payload) => (dispatch, getState) => {
  dispatch(loading(true));
  axios.get(process.env.GET_TERMS).then((response) => {
    try {
      dispatch(loading(false));
      dispatch(success(response.data));
    } catch (e) {
      dispatch(error(e));
    }
  });
};
