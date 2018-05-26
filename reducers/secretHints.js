import { handleActions } from 'redux-actions';

import Actions from '../actions/';

const secret_hints = handleActions(
  {
    [Actions.secrethints.registersecrethints](state, action) {
      return Object.assign({}, state, action.payload);
    },
    [Actions.secrethints.getsecrethints](state, action) {
      return Object.assign({}, state, action.payload);
    },
  },
  {
    id: 2,
    like_person_initial: 'T. K.',
    class: '3年4組',
    familiar: true,
    contact_line: true,
    like_person_nickname: 'タロちゃん',
    first_meeting: '体育祭',
    users_id: 1,
  },
);

export default secret_hints;
