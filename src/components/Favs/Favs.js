import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Beer from '../Beer/Beer';

const Favs = ({ beersData }) => {
  const renderFavs = i => {
    return <Beer index={i} />;
  };

  return (
    <Wrapper>
      <Banner>
        <Text>Beer App</Text>
        <Link to="/">
          <Icon>
            <i className="home icon" />
          </Icon>
        </Link>
      </Banner>
      <Container>
        {beersData.map((s, i) => (
          <div key={i}>{renderFavs(i)}</div>
        ))}
      </Container>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  beersData: state.beersData,
  fav: state.fav,
});

Favs.propTypes = {
  index: PropTypes.number,
  beersData: PropTypes.array,
};

//Styled components
const Wrapper = styled.div`
  max-width: 2560px;
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

const Icon = styled.div`
  color: #c12526;
  font-size: 50px;
  width: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-content: flex-start;
  position: relative;
  bottom: 25px;

  &:hover {
    color: #ffce89;
  }

  &:active {
    bottom: 23px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  background-color: #f18805;
  font-weight: 400;
`;

export default connect(mapStateToProps, null)(Favs);
