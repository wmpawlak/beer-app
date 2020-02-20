import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import { reducer } from './redux/reducers/reducer';

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadFromLocalStorage();

const store = createStore(
  reducer,
  persistedState,
  composeEnhancers(applyMiddleware(reduxThunk))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
