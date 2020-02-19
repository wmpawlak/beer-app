import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Beer = ({ beers, index }) => {
  const renderBeerDescription = () => {
    return (
      <Container>
        {beers.map((s, i) => (
          <Wrapper key={i}>
            <Name>{beers[i].name}</Name>
            <Photo src={beers[i].image_url} />
            <Tagline>{beers[i].tagline}</Tagline>
            <Text>
              <Description>{beers[i].description}</Description>
              <Tips>Tips: {beers[i].brewers_tips}</Tips>
            </Text>
            <Icon>
              <i className="heart icon" />
            </Icon>
          </Wrapper>
        ))}
      </Container>
    );
  };

  return <div className="beer-wrapper">{renderBeerDescription(index)}</div>;
};

Beer.propTypes = {
  index: PropTypes.number,
  beers: PropTypes.array,
  name: PropTypes.string,
};

const mapStateToProps = state => ({
  beers: state.beers,
});

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
  color: red;
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

export default connect(mapStateToProps, null)(Beer);
