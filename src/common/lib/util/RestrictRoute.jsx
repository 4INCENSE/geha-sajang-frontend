import React from 'react';

const RestrictRoute = ({ component: Component, fallback, isAllow }) => {
  return isAllow() ? <Component /> : fallback();
};

export default RestrictRoute;
