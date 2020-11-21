import React from 'react';

const RestrictRoute = ({ component: Component, fallback: Fallback, isAllow }) => {
  return isAllow() ? <Component /> : <Fallback />;
};
export default RestrictRoute;
