import { combineReducers } from 'redux';
import authReducer from './authReducer';
import findUserReducer from './findUserReducer';
import fridgeReducer from './fridgeReducer';
import itemReducer from './itemReducer';

export default combineReducers({
  auth: authReducer,
  foundUser: findUserReducer,
  fridge: fridgeReducer,
  items: itemReducer
});
