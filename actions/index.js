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
    REGISTERLIKEPERSON: async (likePersonTwitterID, userID) => {
      const result = await fetch('http://localhost:8887/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `like_person_twitter_id=${like_person_twitter_id}&user_id=${userID}`,
      }).then(response => response.json());
      return result;
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
      const result = await fetch('http://localhost:8887/secret_hints', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `${hint}=${value}&useer_id=${userID}`,
      }).then(response => response.json());
      return result;
    },
    GETSECRETHINTS: async (userID, likePersonTwitterID, hintContent) => {
      const result = await fetch(`http://localhost:8887/secret_hints/${userID}/${likePersonTwitterID}?content=${hintContent}`, {
        method: 'GET',
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
      const result = await fetch('http://localhost:8887/hints', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `${hint}=${value}&useer_id=${userID}`,
      }).then(response => response.json());
      return result;
    },
    GETNORMALHINTS: async (userID, likePersonTwitterID, hintContent) => {
      const result = await fetch(`http://localhost:8887/hints/${userID}/${likePersonTwitterID}?content=${hintContent}`, {
        method: 'GET',
      }).then(response => response.json());
      return result;
    },
  },
});
