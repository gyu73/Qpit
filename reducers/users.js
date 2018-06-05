import { handleActions } from 'redux-actions';

import Actions from '../actions/';

const users = handleActions(
  {
    [Actions.users.getuserinfo](state, action) {
      return Object.assign({}, state, action.payload);
    },
    [Actions.users.registerlikeperson](state, action) {
      return Object.assign({}, state, action.payload);
    },
  },
  {
    coming_arrow_number: 0,
    created_at: '',
    email: '',
    id: 0,
    image: '',
    last_shoot_time: '',
    like_person_id: '',
    like_person_twitter_profile_image: '',
    name: '',
    nickname: '',
    provider: '',
    stock_arrow: 0,
    uid: '',
    updated_at: '',
  },
);

export default users;
