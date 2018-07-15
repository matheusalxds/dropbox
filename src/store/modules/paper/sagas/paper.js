import { fork, takeEvery, call, put, all } from 'redux-saga/effects';

import { PAPER, loadedPaperData } from '../actions/paper';

import Papers from '../endpoint/paper';

export function* workerLoadPaper(status) {
  try {
    const response = yield call(Papers.getPaperData,status);
    if(response) {
      yield put(loadedPaperData(response));
    }
  } catch (error) {
    console.error(error);
  }
}

// Watchers
export function* watchLoadPaper() {
  yield takeEvery(PAPER.LOAD.REQUEST, function* fn(request) {
    try {
      const { payload } = request;

      yield call(workerLoadPaper, payload);
    } catch (error) {
      console.error(error);
    }
  });
}

export default all([ fork(watchLoadPaper) ]);
