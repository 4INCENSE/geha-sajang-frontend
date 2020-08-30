import ReactDOM from 'react-dom';
import React from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

import { registerReducer } from '@/redux/Registration/reducers/registerReducer';
import { registerGuestHouseReducer } from '@/redux/Registration/reducers/registerGuestHouseReducer';
import { logInLogOutReducer } from '@/redux/LogInLogOut/reducers/logInLogOutReducer';

const rootElement = document.getElementById('root');

const rootReducer = combineReducers({
  registerReducer,
  registerGuestHouseReducer,
  logInLogOutReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk, logger)));

import('@/App').then(({ default: App }) =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  )
);
