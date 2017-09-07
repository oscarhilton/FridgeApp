import { GET_BY_EMAIL } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_BY_EMAIL:
      return action.payload || false;
    default:
      return state;
  }
}
