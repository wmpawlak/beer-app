import punkApi from '../../apis/punkApi';
import { FETCH_BEERS } from './actionTypes';

export const fetchBeers = () => async dispatch => {
  const response = await punkApi.get();
  const beers = Array.from(response.data);
  dispatch({ type: FETCH_BEERS, payload: beers });
};
