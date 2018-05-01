import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import {Provider} from 'react-redux';
import './styles/styles.scss';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import { createLogger } from 'redux-logger';
import reducer from './app/reducers';

const logger = createLogger({});

const store = createStore(
  reducer,
  {
    balance: {
      current: 0,
      currentSet: false,
      future: 0
    },
    balanceChange: {
      changeArray: []
    }
  },
  compose(applyMiddleware(logger)));

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
