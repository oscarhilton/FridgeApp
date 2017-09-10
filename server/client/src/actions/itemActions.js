import { getItems } from '../api/tescoApi';
import axios from 'axios';
import { GET_ITEMS } from './types';

export const returnItems = (req) => async dispatch => {
  const items = await getItems(req);
  dispatch({ type: GET_ITEMS, payload: items.data.uk.ghs.products.results })
}

export const setReminder = (item, fridge) => async dispatch => {
  console.log(item, 'axios');
  const res = await axios.post('/api/item/setReminder', {item, fridge} );
  console.log(res);
}
