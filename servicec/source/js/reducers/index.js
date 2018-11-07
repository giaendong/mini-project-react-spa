import { combineReducers } from 'redux';
import app from 'reducers/app';
import data from 'reducers/data';

export default combineReducers({
  app,
  data,
});
