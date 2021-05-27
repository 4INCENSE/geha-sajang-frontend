import { REMOVE_CREATE_ACCOUNT_DATA } from '@/redux/Registration/type/registerType';

export const removeCreateAccountData = () => (dispatch) => {
  dispatch({
    type: REMOVE_CREATE_ACCOUNT_DATA
  });
};
