import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Beer from '../Beer/Beer';

const BeersList = i => {
  const renderBeer = i => {
    return <Beer index={i} />;
  };

  return <div>{renderBeer(i)}</div>;
};

const mapStateToProps = state => ({
  beers: state.beers,
});

BeersList.propTypes = {
  index: PropTypes.number,
};

export default connect(mapStateToProps, null)(BeersList);
