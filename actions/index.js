import { createActions } from 'redux-actions';

export default createActions({
  USERS: {
    CREATEORGET: async (user) => {
      const result = await fetch('http://localhost:3000/api/users', {
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
    TOKENSET: (token, secret_token) => {
      const payload = ({ token, secret_token });
      return payload;
    },
    USERSET: user => ({ user }),
    GETUSERINFO: async () => {
      const result = await fetch('https://qpit.herokuapp.com/api/users/2')
        .then(response => response.json())
        .then(response => response.user);
      return result;
    },
    REGISTERLIKEPERSON: async (likePersonScreenName, userID) => {
      const result = await fetch(`http://localhost:3000/api/users/${userID}/like-person`, {
        method: 'PUT',
        headers: {
          Accept: 'application/x-www-form-urlencoded',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `like_person_screen_name=${likePersonScreenName}`,
      }).then(response => response.json()).then(response => response.user);
      return result;
    },
    GETLIKEPERSONSECRETHINTS: async (userID, screenName, hintContent) => {
      const result = await fetch(`http://localhost:3000/api/users/${userID}/likeperson/secret-hint?content=${hintContent}`, {
        method: 'GET',
      }).then(response => response.json()).then(response => response.answer);
      return { like_person_hint_answer: result };
    },
  },
  SECRETHINTS: {
    GETUSERSECRETHINTS: async () => {
      const result = await fetch('https://qpit.herokuapp.com/api/users/2')
        .then(response => response.json())
        .then(response => response.secret_hint);
      return result;
    },
    REGISTERSECRETHINTS: async (hint, value, userID) => {
      const result = await fetch(`http://localhost:3000/api/secret_hints/users/${userID}?content=${hint}`, {
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
    GETUSERNORMALHINTS: async () => {
      const result = await fetch('https://qpit.herokuapp.com/api/users/2')
        .then(response => response.json())
        .then(response => response.hint);
      return result;
    },
    REGISTERNORMALHINTS: async (hint, value, userID) => {
      const result = await fetch(`http://localhost:3000/api/hints/users/${userID}?content=${hint}`, {
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
