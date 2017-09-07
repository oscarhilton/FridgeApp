import axios from 'axios';
import { GET_BY_EMAIL } from './types';

export const getUserByEmail = (email) => async dispatch => {
  console.log('email sent by form: ', email);
  const res = await axios.get('/api/user/find', {
     params: {
       email
     }
   });

  console.log('data result ', res);

  dispatch({ type: GET_BY_EMAIL, payload: res.data });
};
