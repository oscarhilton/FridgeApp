import { GET_USER_BY_EMAIL, GET_USER_BY_ID } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_USER_BY_EMAIL:
      return action.payload || false;
    case GET_USER_BY_ID:
      return state = {
        users: [...state.users, action.payload || false]
      }
    default:
      return state;
  }
}
