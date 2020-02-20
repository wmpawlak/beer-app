import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { addFav } from '../../redux/actions';

const Beer = ({ beers, index, addFav, fav }) => {
  const renderBeerDescription = i => {
    const onAddFav = () => {
      addFav(beers[i].id);
    };

    const favColor = () => {
      let color;
      if (fav.includes(beers[index].id)) {
        color = '#c12526';
      } else {
        color = '#d95d39';
      }
      return color;
    };

    const changeColor = event => {
      const icon = event.target;
      if (fav.includes(beers[index].id)) {
        icon.style.color = '#c12526';
      } else {
        icon.style.color = '#d95d39';
      }
    };

    return (
      <Wrapper key={beers[i]}>
        <Name>{beers[i].name}</Name>
        <Photo src={beers[i].image_url} />
        <Tagline>{beers[i].tagline}</Tagline>
        <Text>
          <Description>{beers[i].description}</Description>
          <Tips>Tips: {beers[i].brewers_tips}</Tips>
        </Text>
        <Icon style={{ color: `${favColor()}` }} onClick={changeColor}>
          <i className="heart icon" onClick={onAddFav} />
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
  fav: PropTypes.array,
  name: PropTypes.string,
};

const mapStateToProps = state => ({
  beers: state.beers,
  fav: state.fav,
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
  font-size: 30px;
  padding: 10px 0px 10px 0px;
  width: 20px;

  ${'' /* &:hover {
    color: #ffce89;
  } */}

  &:active {
    position: relative;
    top: 2px;
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(Beer);
