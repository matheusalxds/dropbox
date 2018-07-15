import { all } from 'redux-saga/effects';

// import Sagas
import homeSaga from './home/sagas/home';

// import Reducers
import home from './home/reducers/home';

export function* sagas() {
  yield all([homeSaga]);
}

export const reducers = {
  home,
};
