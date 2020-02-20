import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Router } from 'react-router-dom';

import Container from '../Container/Container';
import store from '../../store';
import history from '../../history';
import Favs from '../Favs/Favs';

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Container} />
          <Route path="/favs" exact component={Favs} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
