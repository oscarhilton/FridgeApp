import { CREATE_FRIDGE } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case CREATE_FRIDGE:
      return action.payload || false;
    default:
      return state;
  }
}
