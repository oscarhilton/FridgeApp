import {
         CREATE_FRIDGE,
         GET_MY_FRIDGES,
         SET_USER_LIST,
         GET_FRIDGE_BY_ID,
         ADD_ITEM
       } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case CREATE_FRIDGE:
      return action.payload || false;
    case GET_MY_FRIDGES:
      return action.payload || false;
    case SET_USER_LIST:
      return action.payload || false;
    case GET_FRIDGE_BY_ID:
      return action.payload || false;
    case ADD_ITEM:
      return state = {
        ...state,
        newItem: action.payload || false
      }
    default:
      return state;
  }
}
