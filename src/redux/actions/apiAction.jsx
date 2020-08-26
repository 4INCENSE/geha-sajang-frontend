export const loading = (payload) => {
  return {
    type: 'LOADING',
    payload
  };
};

export const success = (payload) => {
  return {
    type: 'SUCCESS',
    payload
  };
};

export const error = (payload) => {
  return {
    type: 'ERROR',
    payload
  };
};
