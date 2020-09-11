import { getCookie } from '@/common/lib/util/cookies';

export const isAuthenticated = () => {
  const token = getCookie('jwt');
  return token ? true : false;
};
