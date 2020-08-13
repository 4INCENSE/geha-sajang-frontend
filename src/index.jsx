import ReactDOM from 'react-dom';
import React from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { loggerMiddleware } from '@/redux/middleware/loggerMiddleware';
import { resisterGuestHouseInfoMiddleware } from '@/redux/middleware/resisterGuestHouseInfoMiddleware';

import { resisterGuestHouseInfoReducer } from '@/redux/reducers/resisterGuestHouseInfoReducer';

const rootElement = document.getElementById('root');

const rootReducer = combineReducers({
  resisterGuestHouseInfoReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(loggerMiddleware, resisterGuestHouseInfoMiddleware))
);

import('@/App').then(({ default: App }) =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  )
);
