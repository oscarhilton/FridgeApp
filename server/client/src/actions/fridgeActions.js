import axios from 'axios';
import { CREATE_FRIDGE, GET_MY_FRIDGES } from './types';

export const createFridge = (users) => async dispatch => {
  console.log('email sent by form: ', users);
  const res = await axios.post('/api/fridge/new', {users} );

  console.log('data result ', res);

  dispatch({ type: CREATE_FRIDGE, payload: res.data });
};

export const getMyFridges = () => async dispatch => {
  const res = await axios.get('/api/fridge/owner/me' );

  console.log(res);

  dispatch({ type: GET_MY_FRIDGES, payload: res.data });
};
