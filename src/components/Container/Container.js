import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fetchBeers } from '../../redux/actions';
import BeersList from '../BeersList/BeersList';

class Container extends React.Component {
  componentDidMount() {
    this.props.fetchBeers();
  }

  render() {
    return (
      <Wrapper>
        <Banner>
          Beer App
          <Icon>
            <i className="heart icon" />
          </Icon>
        </Banner>
        <BeersList />
      </Wrapper>
    );
  }
}

Container.propTypes = {
  fetchBeers: PropTypes.func,
};

//Styled components
const Wrapper = styled.div`
  max-width: 2560px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #0e1428;
`;

const Banner = styled.div`
  font-size: 48px;
  height: 100px;
  text-align: center;
  padding: 40px;
  background-color: #f18805;
  font-weight: bold;
`;

const Icon = styled.div`
  color: red;
  font-size: 50px;
  padding: 10px 0px 10px 0px;
`;

const mapDispatchToProps = {
  fetchBeers,
};

export default connect(null, mapDispatchToProps)(Container);
