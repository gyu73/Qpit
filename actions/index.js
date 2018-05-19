import { createActions } from 'redux-actions';

export default createActions({
  USERS: {
    GETUSERINFO: async () => {
      const result = await fetch('http://localhost:8887/users')
        .then(response => response.json())
        .then(response => response[0]);
      return result;
    },
  },
});
