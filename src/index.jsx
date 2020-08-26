import ReactDOM from 'react-dom';
import React from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

import { registerGuestHouseInfoReducer } from '@/redux/reducers/registerGuestHouseInfoReducer';

const rootElement = document.getElementById('root');

const rootReducer = combineReducers({
  registerGuestHouseInfoReducer
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
