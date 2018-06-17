import { handleActions } from 'redux-actions';

import Actions from '../actions/';

const secret_hints = handleActions(
  {
    [Actions.secrethints.getsecrethints](state, action) {
      return Object.assign({}, state, action.payload);
    },
    [Actions.secrethints.registersecrethints](state, action) {
      return Object.assign({}, state, action.payload);
    },
    [Actions.secrethints.getsecrethints](state, action) {
      return Object.assign({}, state, action.payload);
    },
  },
  {
    id: 0,
    like_person_initial: '',
    classroom: '',
    familiar: '',
    contact_line: '',
    like_person_nickname: '',
    first_meeting: '',
    user_id: 0,
    hint_id: 0,
    created_at: '',
    updated_at: '',
  },
);

export default secret_hints;
