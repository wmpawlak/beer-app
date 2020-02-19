import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Beer from '../Beer/Beer';

const BeersList = ({ fav }) => {
  const renderFavs = i => {
    return <Beer index={i} />;
  };

  return (
    <Wrapper>
      <Banner>
        <Text>Beer App</Text>
      </Banner>
      <Container>
        {fav.map((s, i) => (
          <div key={i}>{renderFavs(i)}</div>
        ))}
      </Container>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  beers: state.beers,
  fav: state.fav,
});

//Styled components
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f18805;
`;

const Banner = styled.div`
  height: 100px;
  text-align: center;
  padding: 40px;
  margin-bottom: 20px;
  background-color: #f18805;
  font-weight: bold;
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 48px;
  padding: 10px 0px 10px 0px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  background-color: #f18805;
  font-weight: 400;
`;

BeersList.propTypes = {
  index: PropTypes.number,
  fav: PropTypes.array,
};

export default connect(mapStateToProps, null)(BeersList);
