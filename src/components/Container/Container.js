import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

import { fetchBeers, fetchNewBeers, fetchFavBeers } from '../../redux/actions';
import BeersList from '../BeersList/BeersList';

class Container extends React.Component {
  componentDidMount() {
    this.props.fetchBeers();
  }

  downloadNewBeers = () => {
    const beers = this.props.beers;
    const lastId = beers[beers.length - 1].id;
    const idsArr = _.range(10 + lastId, lastId);
    const ids = idsArr.join('|');
    this.props.fetchNewBeers(ids);
  };

  downloadFavBeers = () => {
    const favIds = this.props.fav;
    const ids = favIds.join('|');
    this.props.fetchFavBeers(ids);
  };

  render() {
    return (
      <Wrapper>
        <Banner>
          <Text>Beer App</Text>
          <Link to="/favs">
            <Icon onClick={this.downloadFavBeers}>
              <i className="heart icon" />
            </Icon>
          </Link>
        </Banner>
        <BeersList />
        <DownloadButton onClick={this.downloadNewBeers}>
          load 10 more
        </DownloadButton>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = {
  fetchBeers,
  fetchNewBeers,
  fetchFavBeers,
};

const mapStateToProps = state => ({
  beers: state.beers,
  favData: state.favData,
  fav: state.fav,
});

Container.propTypes = {
  fetchBeers: PropTypes.func,
  fetchNewBeers: PropTypes.func,
  fetchFavBeers: PropTypes.func,
  length: PropTypes.number,
  beers: PropTypes.array,
  fav: PropTypes.array,
};

//Styled components
const Wrapper = styled.div`
  max-width: 2560px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #0e1428;
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

const Text = styled.div`
  font-size: 48px;
  padding: 10px 0px 10px 0px;
`;

const DownloadButton = styled.button`
  border-radius: 7px;
  border: 3px solid #d95d39;
  font-size: 26px;
  font-weight: 600;
  width: 230px;
  height: 60px;
  text-transform: uppercase;
  background-color: #c12526;
  display: flex;
  justify-content: center;
  outline: none;
  margin: 15px 0px 30px 0px;
  align-self: center;

  &:hover {
    color: #f18805;
  }

  &:active {
    position: relative;
    top: 2px;
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(Container);
