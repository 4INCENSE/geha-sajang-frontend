import React from 'react';
import { Redirect } from 'react-router';

export const RestrictRoute = ({ component: Component, fallback: Fallback, isAllow }) => {
  return isAllow ? <Component /> : <Fallback />;
};

export default RestrictRoute;
