import { defaultState } from './index';
import { FETCH_BEERS, ADD_FAV } from '../actions/actionTypes';

export const reducer = (state = defaultState, action) => {
  if (action.type === FETCH_BEERS) {
    return { ...state, beers: action.payload };
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
