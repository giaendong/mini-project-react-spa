import { Map } from 'immutable';

import {
  GET_DATA_START,
  GET_DATA_ERROR,
  GET_DATA_SUCCESS,
} from 'actions/data';

const initialState = Map({
  loading: false,
  error: null,
  data: null,
});

const actionsMap = {
  // Async action
  [GET_DATA_START]: (state) => {
    return state.merge(Map({
      loading: true,
      error: null,
      data: null,
    }));
  },
  [GET_DATA_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      error: action.error.message,
    }));
  },
  [GET_DATA_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      data: { ...action.data },
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
