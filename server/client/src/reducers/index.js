import { combineReducers } from 'redux';
import authReducer from './authReducer';
import findUserReducer from './findUserReducer';
import fridgeReducer from './fridgeReducer';

export default combineReducers({
  auth: authReducer,
  foundUser: findUserReducer,
  fridge: fridgeReducer
});
