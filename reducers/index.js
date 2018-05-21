import { combineReducers } from 'redux';
import users from './users';
import secret_hints from './secretHints';
import normal_hints from './normalHints';

export default combineReducers({
  users,
  secret_hints,
  normal_hints,
});
