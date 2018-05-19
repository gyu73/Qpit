import { createActions } from 'redux-actions';

export default createActions({
  USERS: {
    GETUSERS: text => ({ newTodo: text }),
  },
});
