import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import auth from './auth';
import room from './room';
import chat from './chat';

export default combineReducers({
  routing: routerReducer,
  auth,
  room,
  chat,
  form
});