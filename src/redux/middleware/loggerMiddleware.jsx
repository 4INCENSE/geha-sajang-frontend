//출처 : https://velopert.com/3401

const loggerMiddleware = (store) => (next) => (action) => {
  console.log('now : ', store.getState());
  console.log('action : ', action);
  const result = next(action);
  console.log('after : ', store.getState());
  console.log('\n');
  return result;
};

export { loggerMiddleware };
