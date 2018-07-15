import { fork, takeEvery, call, put, all } from 'redux-saga/effects';

import { HOME, loadedHomeData } from '../actions/home';

import Home from '../endpoint/home';

export function* workerHome(status) {
  console.log('status', status);
  try {
    const response = yield call(Home.getHomeData);
    console.log('response -->', response);
  } catch (error) {
    console.error(error);
  }
}

// Watchers
export function* watchHome() {
  yield takeEvery(HOME.LOAD.REQUEST, function* fn(request) {
    try {
      const { payload } = request;

      yield call(workerHome, payload);
    } catch (error) {
      console.error(error);
    }
  });
}

export default all([ fork(watchHome) ]);
