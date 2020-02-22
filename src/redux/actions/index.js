import punkApi from '../../apis/punkApi';
import {
  FETCH_BEERS,
  ADD_FAV,
  FETCH_NEW_BEERS,
  FETCH_FAV_BEERS,
} from './actionTypes';

export const fetchBeers = () => async dispatch => {
  const firstBeers = '1|2|3|4|5|6|7|8|9|10';
  const response = await punkApi.get(`?ids=${firstBeers}`);
  const beersData = Array.from(response.data);
  dispatch({ type: FETCH_BEERS, payload: beersData });
};

export const fetchNewBeers = ids => async dispatch => {
  const response = await punkApi.get(`?ids=${ids}`);
  const beersData = Array.from(response.data);
  dispatch({ type: FETCH_NEW_BEERS, payload: beersData });
};

export const fetchFavBeers = ids => async dispatch => {
  const response = await punkApi.get(`?ids=${ids}`);
  const beersData = Array.from(response.data);
  dispatch({ type: FETCH_FAV_BEERS, payload: beersData });
};

export const addFav = index => ({
  type: ADD_FAV,
  payload: index,
});
