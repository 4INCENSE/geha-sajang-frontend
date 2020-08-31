import { REMOVE_ACCESS_TOKEN } from '@/redux/LogInLogOut/type/logInLogOutType';

const removeAccessToken = () => {
  return {
    type: REMOVE_ACCESS_TOKEN
  };
};

export { removeAccessToken };
