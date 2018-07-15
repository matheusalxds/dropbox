import { fork, takeEvery, call, put, all } from 'redux-saga/effects';

import { FILES, loadedFileData } from '../actions/files';

import Files from '../endpoint/files';

export function* workerLoadFile(status) {
  try {
    const response = yield call(Files.getFileData,status);
    if(response) {
      yield put(loadedFileData(response));
    }
  } catch (error) {
    console.error(error);
  }
}

// Watchers
export function* watchLoadFile() {
  yield takeEvery(FILES.LOAD.REQUEST, function* fn(request) {
    try {
      const { payload } = request;

      yield call(workerLoadFile, payload);
    } catch (error) {
      console.error(error);
    }
  });
}

export default all([ fork(watchLoadFile) ]);
