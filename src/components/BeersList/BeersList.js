import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Beer from '../Beer/Beer';

const BeersList = ({ beersData }) => {
  return (
    <Container>
      {beersData.map((s, i) => (
        <Beer key={i} index={i} />
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
  max-width: 100vw;
  background-color: #f18805;
  font-weight: 400;
`;

export default connect(mapStateToProps, null)(BeersList);
