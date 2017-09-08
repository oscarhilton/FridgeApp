import { getItems } from '../api/tescoApi';
import { GET_ITEMS } from './types';

export const returnItems = (req) => async dispatch => {
  const items = await getItems(req);
  dispatch({ type: GET_ITEMS, payload: items.data.uk.ghs.products.results })
}
