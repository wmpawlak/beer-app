import React from 'react';
import { connect } from 'react-redux';

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

export default connect(mapStateToProps, null)(BeersList);
