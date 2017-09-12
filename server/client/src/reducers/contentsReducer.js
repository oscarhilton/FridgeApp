import { GET_CONTENTS } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_CONTENTS:
      return state = {
        ...state,
        contents: action.payload || false
      }
    default:
      return state;
  }
}
