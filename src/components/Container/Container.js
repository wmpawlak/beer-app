import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

import { fetchBeers, fetchNewBeers } from '../../redux/actions';
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

  render() {
    return (
      <Wrapper>
        <Banner>
          <Text>Beer App</Text>
          <Link to="/favs">
            <Icon>
              <i className="heart icon" />
            </Icon>
          </Link>
        </Banner>
        <BeersList />
        <DownloadButton onClick={this.downloadNewBeers} />
      </Wrapper>
    );
  }
}

Container.propTypes = {
  fetchBeers: PropTypes.func,
  fetchNewBeers: PropTypes.func,
  length: PropTypes.number,
  beers: PropTypes.array,
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
  height: 50px;
  width: 150px;
  box-shadow: 0px 10px 14px -7px #000000a1;
  border-radius: 10px;
  font-size: 26px;
  font-weight: 600;
`;

const mapDispatchToProps = {
  fetchBeers,
  fetchNewBeers,
};

const mapStateToProps = state => ({
  beers: state.beers,
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
