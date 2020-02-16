import punkApi from '../../apis/punkApi';
import { FETCH_BEERS } from './actionTypes';

export const fetchBeers = () => async dispatch => {
  const response = await punkApi.get();
  //console.log(response.data);
  dispatch({ type: FETCH_BEERS, payload: response.data })
};
