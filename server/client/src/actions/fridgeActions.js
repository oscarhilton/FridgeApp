import axios from 'axios';
import { CREATE_FRIDGE,
         GET_MY_FRIDGES,
         SET_USER_LIST,
         GET_FRIDGE_BY_ID,
         ADD_ITEM,
         SET_REMINDER,
         UPDATE_FRIDGE_DATE
        } from './types';

export const createFridge = (users) => async dispatch => {
  const res = await axios.post('/api/fridge/new', {users} );
  window.location = res.data.redirect
  dispatch({ type: CREATE_FRIDGE, payload: res.data });
};

export const getMyFridges = () => async dispatch => {
  const res = await axios.get('/api/fridge/owner/me' );
  dispatch({ type: GET_MY_FRIDGES, payload: res.data });
};

export const setUserList = () => async dispatch => {
  const currentUser = await axios.get('./api/current_user');
  const usersToAdd = {
    usersToAdd: currentUser.data
  }
  dispatch({ type: SET_USER_LIST, payload: usersToAdd })
}

export const getFridgeById = (id) => async dispatch => {
  const res = await axios.get('/api/fridge/findById', { params: {id } });
  dispatch({ type: GET_FRIDGE_BY_ID, payload: {
    validPage: true,
    current: res.data
  } })
}

export const addItem = (item, fridge) => async dispatch => {
  const res = await axios.post('/api/fridge/addItem', {item, fridge} );
  dispatch({ type: ADD_ITEM, payload: { ...res.data, something: 'else' } })
}

export const setReminder = (item, fridge) => async dispatch => {
  const res = await axios.post('/api/item/setReminder', {item, fridge} );
  console.log(res);
  dispatch({ type: SET_REMINDER, payload: res.data })
}

export const updateFridgeDate = (fridge) => async dispatch => {
  const res = await axios.post('/api/item/updateFridgeDate', {fridge} );
  dispatch({ type: UPDATE_FRIDGE_DATE, payload: res.data })
}
