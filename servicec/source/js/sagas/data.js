import { take, call, put, fork } from 'redux-saga/effects';

import {
  GET_DATA_START,
  GET_DATA_ERROR,
  GET_DATA_SUCCESS,
} from 'actions/data';
import api from 'api';

// -------- Get data

export function* getData(page) {
  try {
    const data = yield call(() => api.getData(page));
    const action = { type: GET_DATA_SUCCESS, data };
    yield put(action);
  } catch (error) {
    const action = { type: GET_DATA_ERROR, error };
    yield put(action);
  }
}


function* getDataWatcher() {
  while (true) {
    const { page } = yield take(GET_DATA_START);
    yield* getData(page);
  }
}


export default function* dataSagas() {
  yield fork(getDataWatcher);
}
