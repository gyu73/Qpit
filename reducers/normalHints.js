import { handleActions } from 'redux-actions';

import Actions from '../actions/';

const normal_hints = handleActions(
  {
    [Actions.normalhints.registernormalhints](state, action) {
      return Object.assign({}, state, action.payload);
    },
    [Actions.normalhints.getnormalhints](state, action) {
      return Object.assign({}, state, action.payload);
    },
  },
  {
    id: 2,
    has_like_person: true,
    belongs_to_club: true,
    club: 'サッカー',
    hair_style: 'ショート',
    clothing: '古着',
    height: 180,
    personality: '元気',
    age: 20,
    school: '尼崎高校',
    company: 'div株式会社',
    favorite_phrase: 'まじで？',
    llike_food: 'お寿司',
    like_music: 'ケツメイシ',
    hobby: '野球',
    like_subject: '数学',
    hate_subject: '英語',
    has_spoken: true,
    users_id: 1,
  },
);

export default normal_hints;
