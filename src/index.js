import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router'
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';
import Routes from './Routes';

import { reducers, sagas } from './store/modules/index'; // Or wherever you keep your reducers

import {
  syncHistoryWithStore,
  routerMiddleware,
  routerReducer,
} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = routerMiddleware(hashHistory);

const store = createStore(
combineReducers({
  ...reducers,
  routing: routerReducer,
}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
applyMiddleware(middleware, sagaMiddleware, logger)
);
sagaMiddleware.run(sagas);

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
<Provider store={store}>
  <Router routes={ Routes } history={ history }/>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
