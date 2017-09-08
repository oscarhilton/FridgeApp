import {
         GET_ITEMS
       } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_ITEMS:
      return action.payload || false;
    default:
      return state;
  }
}
