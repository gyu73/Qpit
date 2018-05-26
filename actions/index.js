import { createActions } from 'redux-actions';

export default createActions({
  USERS: {
    GETUSERINFO: async () => {
      const result = await fetch('http://localhost:8887/users')
        .then(response => response.json())
        .then(response => response[0]);
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
    GETSTERSECRETHINTS: async (userID, likePersonTwitterID, hintContent) => {
      const result = await fetch(`http://localhost:8887/secret_hints/${userID}/${likePersonTwitterID}?content=${hintContent}`, {
        method: 'GET',
      }).then(response => response.json());
      return result;
    },
  },
  NORMALHINTS: {
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
  },
});
