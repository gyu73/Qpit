import { createActions } from 'redux-actions';

export default createActions({
  USERS: {
    CREATEORGET: async (user) => {
      const result = await fetch('https://qpit.herokuapp.com/api/users', {
        method: 'POST',
        headers: {
          Accept: 'application/x-www-form-urlencoded',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `user=${JSON.stringify(user)}`,
      })
        .then(response => response.json())
        .then(response => response.user);
      return result;
    },
    LOGOUT: async (userID) => {
      await fetch(`https://qpit.herokuapp.com/api/users/${userID}`, {
        method: 'DELETE',
      });
    },
    DELETEUSER: async (userID) => {
      await fetch(`https://qpit.herokuapp.com/api/users/${userID}/delete`, {
        method: 'DELETE',
      });
    },
    GETARROWSTOCK: async (userID) => {
      const result = await fetch(`https://qpit.herokuapp.com/api/users/${userID}/arrow`, {
        method: 'PUT',
      })
        .then(response => response.json());
      return result;
    },
    TOKENSET: (token, secret_token) => {
      const payload = ({ token, secret_token });
      return payload;
    },
    USERSET: user => ({ user }),
    GETUSERINFO: async (userID) => {
      console.log(userID);
      const result = await fetch(`https://qpit.herokuapp.com/api/users/${userID}`)
        .then(response => response.json())
        .then(response => response.user);
      return result;
    },
    REGISTERLIKEPERSON: async (likePersonScreenName, userID) => {
      const result = await fetch(`https://qpit.herokuapp.com/api/users/${userID}/like-person`, {
        method: 'PUT',
        headers: {
          Accept: 'application/x-www-form-urlencoded',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `like_person_screen_name=${likePersonScreenName}`,
      }).then(response => response.json()).then(response => response.user);
      return result;
    },
    GETLIKEPERSONNORMALHINTS: async (userID, screenName, hintContent) => {
      const result = await fetch(`https://qpit.herokuapp.com/api/users/${userID}/likeperson/normal-hint?content=${hintContent}`, {
        method: 'GET',
      }).then(response => response.json()).then(response => response);
      // todo こういうロジックをモデルに書くべき。直接データを書き換えるのはダメ。
      result.user.like_person_hint_answer = result.answer;
      return result.user;
    },
    GETLIKEPERSONSECRETHINTS: async (userID, screenName, hintContent) => {
      const result = await fetch(`https://qpit.herokuapp.com/api/users/${userID}/likeperson/secret-hint?content=${hintContent}`, {
        method: 'GET',
      }).then(response => response.json()).then(response => response);
      // todo こういうロジックをモデルに書くべき。直接データを書き換えるのはダメ。
      result.user.like_person_hint_answer = result.answer;
      return result.user;
    },
  },
  SECRETHINTS: {
    GETSECRETHINTS: async (userID) => {
      const result = await fetch(`https://qpit.herokuapp.com/api/secret_hints/users/${userID}`)
        .then(response => response.json());
      return result;
    },
    REGISTERSECRETHINTS: async (hint, value, userID) => {
      const result = await fetch(`https://qpit.herokuapp.com/api/secret_hints/users/${userID}?content=${hint}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/x-www-form-urlencoded',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `answer=${value}`,
      }).then(response => response.json());
      return result;
    },
  },
  NORMALHINTS: {
    GETNORMALHINTS: async (userID) => {
      const result = await fetch(`https://qpit.herokuapp.com/api/hints/users/${userID}`)
        .then(response => response.json());
      return result;
    },
    REGISTERNORMALHINTS: async (hint, value, userID) => {
      const result = await fetch(`https://qpit.herokuapp.com/api/hints/users/${userID}?content=${hint}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/x-www-form-urlencoded',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `answer=${value}`,
      }).then(response => response.json());
      return result;
    },
    GETLIKEPERSONNORMALHINTS: async (userID, likePersonTwitterID, hintContent) => {
      const result = await fetch(`http://localhost:8887/hints/${userID}/${likePersonTwitterID}?content=${hintContent}`, {
        method: 'GET',
      }).then(response => response.json());
      return result;
    },
  },
});
