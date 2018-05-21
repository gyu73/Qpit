import { combineReducers } from 'redux';
import users from './users';
import secret_hints from './secretHints';

export default combineReducers({
  users,
  secret_hints,
});
