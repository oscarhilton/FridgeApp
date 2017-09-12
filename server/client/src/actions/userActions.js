import axios from 'axios';
import { GET_USER_BY_EMAIL, GET_USER_BY_ID } from './types';

export const getUserByEmail = (email) => async dispatch => {
  console.log('email sent by form: ', email);
  const res = await axios.get('/api/user/find/byEmail', {
     params: {
       email
     }
   });

  console.log('data result ', res);

  dispatch({ type: GET_USER_BY_EMAIL, payload: res.data });
};

// export const getUserById = (id) => async dispatch => {
//   const res = await axios.get('/api/user/find/byID', {
//      params: {
//        id
//      }
//    });
//
//   console.log('data result ', res);
//
//   dispatch({ type: GET_USER_BY_ID, payload: res.data });
// };
