import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Beer from '../Beer/Beer';

const BeersList = ({ beersData }) => {
  const renderBeer = i => {
    return <Beer index={i} />;
  };

  return (
    <Container>
      {beersData.map((s, i) => (
        <div key={i}>{renderBeer(i)}</div>
      ))}
    </Container>
  );
};

const mapStateToProps = state => ({
  beersData: state.beersData,
});

BeersList.propTypes = {
  index: PropTypes.number,
  beersData: PropTypes.array,
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
