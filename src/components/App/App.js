import React from 'react';
import { Provider } from 'react-redux';

import Container from '../Container/Container';
import store from '../../store';
import punkApi from '../../apis/punkApi';

class App extends React.Component {
  state = { beers: null };

  componentDidMount() {
    this.onAppStart()
  }

  onAppStart = async () => {
    const response = await punkApi();
    this.setState({
      beers: response.data
    });
    console.log(this.state.beers);
  };

  render() {
    return (
      <Provider store={store} >
        <Container />
      </Provider>
    );
  }
}

export default App;
