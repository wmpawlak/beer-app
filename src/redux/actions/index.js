import punkApi from '../../apis/punkApi';
import { FETCH_BEERS } from './actionTypes';

export const fetchBeers = () => async dispatch => {
  const response = await punkApi.get();
  console.log(response.data);
  const beers = Array.from(response.data);
  console.log(beers);
  dispatch({ type: FETCH_BEERS, payload: beers });
};
