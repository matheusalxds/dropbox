import { all } from 'redux-saga/effects';

// import Sagas
import filesSaga from './files/sagas/files';
import homeSaga from './home/sagas/home';
import paperSaga from './paper/sagas/paper';

// import Reducers
import files from './files/reducers/files';
import home from './home/reducers/home';
import paper from './paper/reducers/paper';

export function* sagas() {
  yield all([ homeSaga, filesSaga, paperSaga ]);
}

export const reducers = {
  home,
  files,
  paper
};
