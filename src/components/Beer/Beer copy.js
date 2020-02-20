import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { addFav } from '../../redux/actions';

const Beer = ({ beers, index, addFav }) => {
  const renderBeerDescription = index => {
    const onAddFav = () => {
      addFav(beers[index].id);
    };
    return (
      <Wrapper key={beers[index]}>
        <Name>{beers[index].name}</Name>
        <Photo src={beers[index].image_url} />
        <Tagline>{beers[index].tagline}</Tagline>
        <Text>
          <Description>{beers[index].description}</Description>
          <Tips>Tips: {beers[index].brewers_tips}</Tips>
        </Text>
        <Icon onClick={onAddFav}>
          <i className="heart icon" />
        </Icon>
      </Wrapper>
    );
  };

  return <div className="beer-wrapper">{renderBeerDescription(index)}</div>;
};

Beer.propTypes = {
  addFav: PropTypes.func,
  index: PropTypes.number,
  beers: PropTypes.array,
  name: PropTypes.string,
};

const mapStateToProps = state => ({
  beers: state.beers,
});

const mapDispatchToProps = {
  addFav: addFav,
};

//Styled components
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid #d95d39;
  border-radius: 20px;
  margin: 10px;
  background-color: #f0a202;
  padding: 10px;
`;

const Name = styled.div`
  width: 300px;
  height: 35px;
  box-sizing: border-box;
  text-align: center;
  margin: 10px 0px 5px 0px;
  font-size: 24px;
  font-weight: bold;
  line-height: 25px;
`;

const Photo = styled.img`
  max-height: 280px;
  width: auto;
  margin: 20px 10px 5px 10px;
  object-fit: contain;
`;

const Tagline = styled.div`
  width: 340px;
  height: 25px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  margin: 10px 0px 15px 0px;
`;

const Text = styled.div`
  width: 300px;
  height: 350px;
  text-align: justify;
  margin: 10px 0px 0px 0px;
`;

const Description = styled.div`
  null;
`;

const Tips = styled.div`
  margin: 10px 0px 0px 0px;
`;

const Icon = styled.div`
  color: #c12526;
  font-size: 30px;
  padding: 10px 0px 10px 0px;

  &:hover {
    color: #ffce89;
  }

  &:active {
    position: relative;
    top: 2px;
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(Beer);
