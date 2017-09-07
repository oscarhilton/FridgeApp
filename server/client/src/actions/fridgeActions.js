import axios from 'axios';
import { CREATE_FRIDGE } from './types';

export const createFridge = (users) => async dispatch => {
  console.log('email sent by form: ', users);
  const res = await axios.post('/api/fridge/new', {users} );

  console.log('data result ', res);

  dispatch({ type: CREATE_FRIDGE, payload: res.data });
};
