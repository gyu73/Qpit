import { createActions } from 'redux-actions';

export default createActions({
  USERS: {
    GETUSERINFO: async () => {
      const result = await fetch('http://localhost:8887/users')
        .then(response => response.json())
        .then(response => response[0]);
      return result;
    },
    // todo 現在ログインしているユーザーidを入れる必要あり。
    // todo validationの実装必要あり。
    REGISTERLIKEPERSON: async (value) => {
      const result = await fetch('http://localhost:8887/users', {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `like_person_twitter_id=${value}`,
      }).then(response => response.json());
      return result;
    },
  },
});
