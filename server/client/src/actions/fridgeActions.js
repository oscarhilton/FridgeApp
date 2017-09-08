import axios from 'axios';
import { CREATE_FRIDGE,
         GET_MY_FRIDGES,
         SET_USER_LIST,
         GET_FRIDGE_BY_ID,
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
  console.log(res.data);
  dispatch({ type: GET_FRIDGE_BY_ID, payload: {
    validPage: true,
    current: res.data
  } })
}
