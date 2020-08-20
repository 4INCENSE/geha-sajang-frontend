import ReactDOM from 'react-dom';
import React from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { loggerMiddleware } from '@/redux/middleware/loggerMiddleware';
import { registerGuestHouseInfoMiddleware } from '@/redux/middleware/registerGuestHouseInfoMiddleware';

import { registerGuestHouseInfoReducer } from '@/redux/reducers/registerGuestHouseInfoReducer';

const rootElement = document.getElementById('root');

const rootReducer = combineReducers({
  registerGuestHouseInfoReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(loggerMiddleware, registerGuestHouseInfoMiddleware))
);

import('@/App').then(({ default: App }) =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  )
);
