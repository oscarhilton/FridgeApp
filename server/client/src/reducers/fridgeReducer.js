import {
         CREATE_FRIDGE,
         GET_MY_FRIDGES,
         SET_USER_LIST,
         GET_FRIDGE_BY_ID,
         ADD_ITEM,
         SET_REMINDER
       } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case CREATE_FRIDGE:
      return state = {
        ...state,
        newFridge: action.payload || false
      }
    case GET_MY_FRIDGES:
      return state = {
        ...state,
        myFridges: action.payload || false
      }
    case SET_USER_LIST:
      return state = {
        ...state,
        userList: action.payload || false
      }
    case GET_FRIDGE_BY_ID:
      console.log(action, 'ACTION!!!!');
      return state = {
        ...state,
        id: action.payload.current._id || false,
        validPage: action.payload.validPage || false,
        users: action.payload.users || false,
        contents: action.payload.current.items || false,
        lastUpdated: action.payload.current.lastUpdated || false,
      }
    case ADD_ITEM:
      return state = {
        ...state,
        contents: [
          action.payload,
          ...state.contents
        ]
      }
    case SET_REMINDER:
      return state = {
        ...state,
        updatedFridge: action.payload || false
      }
    default:
      return state;
  }
}
