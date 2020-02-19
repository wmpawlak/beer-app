import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Beer from '../Beer/Beer';

const BeersList = ({ beers }) => {
  const renderBeer = i => {
    return <Beer index={i} />;
  };

  return (
    <Container>
      {beers.map((s, i) => (
        <div key={i}>{renderBeer(i)}</div>
      ))}
    </Container>
  );
};

const mapStateToProps = state => ({
  beers: state.beers,
});

BeersList.propTypes = {
  index: PropTypes.number,
  beers: PropTypes.array,
};

//Styled components
const Container = styled.div`
  color: black;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  max-width: 2560px;
  background-color: #f18805;
  font-weight: 400;
`;

export default connect(mapStateToProps, null)(BeersList);
