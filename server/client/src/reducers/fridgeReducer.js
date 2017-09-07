import { CREATE_FRIDGE, GET_MY_FRIDGES } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case CREATE_FRIDGE:
      return action.payload || false;
    case GET_MY_FRIDGES:
      return action.payload || false;
    default:
      return state;
  }
}
