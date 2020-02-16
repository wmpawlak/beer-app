import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchBeers } from '../../redux/actions';

class Container extends React.Component {
  componentDidMount() {
    const beers = this.props.fetchBeers();
    console.log(beers);
  };

  render() {
    return (
      <div>
        Działamy!
    </div>
    );
  };
};

Container.propTypes = {
  fetchBeers: PropTypes.func,
};

const mapStateToProps = state => ({
  beers: state.beers
});

const mapDispatchToProps = {
  fetchBeers
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
