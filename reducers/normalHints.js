import { handleActions } from 'redux-actions';

import Actions from '../actions/';

const normal_hints = handleActions(
  {
    [Actions.normalhints.getnormalhints](state, action) {
      return Object.assign({}, state, action.payload);
    },
    [Actions.normalhints.registernormalhints](state, action) {
      return Object.assign({}, state, action.payload);
    },
    [Actions.normalhints.getnormalhints](state, action) {
      return Object.assign({}, state, action.payload);
    },
  },
  {
    age: '',
    belong_to_club: '',
    clothing: '',
    club: '',
    company: '',
    created_at: '',
    favorite_phrase: '',
    hair_style: '',
    has_like_person: '',
    has_spoken: '',
    hate_subject: '',
    height: '',
    hobby: '',
    id: 0,
    like_food: '',
    like_music: '',
    like_subject: '',
    personality: '',
    school: '',
    updated_at: '',
    user_id: 0,
  },
);

export default normal_hints;
