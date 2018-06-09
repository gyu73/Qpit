import { handleActions } from 'redux-actions';

import Actions from '../actions/';

const users = handleActions(
  {
    [Actions.users.tokenset](state, action) {
      return Object.assign({}, state, action.payload);
    },
    [Actions.users.userset](state, action) {
      return Object.assign({}, state, action.user);
    },
    [Actions.users.getuserinfo](state, action) {
      return Object.assign({}, state, action.payload);
    },
    [Actions.users.registerlikeperson](state, action) {
      return Object.assign({}, state, action.payload);
    },
    [Actions.users.createorget](state, action) {
      return Object.assign({}, state, action.payload);
    },
    [Actions.users.getlikepersonsecrethints](state, action) {
      return Object.assign({}, state, action.payload);
    },
  },
  {
    coming_arrow_number: 0,
    id: 0,
    last_shoot_time: '',
    like_person_screen_name: '', // @で始まる相手のアカウント名
    like_person_twitter_profile_image: '',
    stock_arrow: 0,
    name: '',
    profile_image_url_https: '',
    screen_name: '', // @で始まるアカウント名
    uid: 0, // twitterのid
    token: '',
    token_secret: '',
    like_person_hint_answer: '',
  },
);

export default users;
