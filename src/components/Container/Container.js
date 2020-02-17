import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchBeers } from '../../redux/actions';
import BeersList from '../BeersList/BeersList';

class Container extends React.Component {
  componentDidMount() {
    this.props.fetchBeers();
  }

  render() {
    return (
      <div>
        <BeersList />
      </div>
    );
  }
}

Container.propTypes = {
  fetchBeers: PropTypes.func,
};

const mapDispatchToProps = {
  fetchBeers,
};

export default connect(null, mapDispatchToProps)(Container);
