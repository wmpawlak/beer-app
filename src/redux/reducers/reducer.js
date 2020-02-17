import { defaultState } from './index';
import { FETCH_BEERS } from '../actions/actionTypes';

export const reducer = (state = defaultState, action) => {
  if (action.type === FETCH_BEERS) {
    return { ...state, beers: action.payload };
  } else {
    return state;
  }
};
