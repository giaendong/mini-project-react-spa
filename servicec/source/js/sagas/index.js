import { all } from 'redux-saga/effects';

import dataSagas from 'sagas/data';

export default function* rootSaga() {
  yield all([
    dataSagas(),
  ]);
}
