import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import { reducer } from './redux/reducers/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;
