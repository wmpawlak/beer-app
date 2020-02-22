import { defaultState } from './index';
import {
  FETCH_BEERS,
  ADD_FAV,
  FETCH_NEW_BEERS,
  FETCH_FAV_BEERS,
} from '../actions/actionTypes';

export const reducer = (state = defaultState, action) => {
  if (action.type === FETCH_NEW_BEERS) {
    const beersCopy = [...state.beersData.concat(action.payload)];
    return { ...state, beersData: beersCopy };
  }

  if (action.type === FETCH_FAV_BEERS) {
    const favCopy = [...action.payload];
    return { ...state, beersData: favCopy };
  }

  if (action.type === FETCH_BEERS) {
    return { ...state, beersData: action.payload };
  }

  if (action.type === ADD_FAV) {
    const favCopy = state.fav;
    if (favCopy.includes(action.payload)) {
      const index = favCopy.findIndex(x => x === action.payload);
      favCopy.splice(index, 1);
    } else {
      favCopy.push(action.payload);
    }
    return { ...state, fav: favCopy };
  } else {
    return state;
  }
};
