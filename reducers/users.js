import { handleActions } from 'redux-actions';

import Actions from '../actions/';

const users = handleActions(
  {
    [Actions.users.getuserinf](state, action) {
      return Object.assign({}, state, action.payload);
    },
  },
  {
    id: 1,
    like_person_twitter_id: 'aaa',
    like_person_profile_image: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    last_shoot_arrow_time: '2005-12-21 00:00:00.000',
    profile_image: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    stock_arrow: 3,
    comig_arrow: 10,
    twitter_id: 'gyu73',
  },
);

export default users;
