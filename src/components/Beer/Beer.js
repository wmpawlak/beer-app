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
            <Description>{beers[i].description}</Description>
            <Ibu>IBU: {beers[i].ibu}</Ibu>
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
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid blue;
`;

const Name = styled.div`
  width: 250px;
  border: 1px solid black;
  text-align: center;
  margin: 10px;
`;

const Photo = styled.img`
  max-height: 300px;
  width: auto;
  border: 1px solid yellow;
  object-fit: contain;
`;

const Tagline = styled.div`
  width: 250px;
  border: 1px solid black;
`;

const Description = styled.div`
  width: 250px;
  border: 1px solid black;
  margin: 10px;
`;

const Ibu = styled.div`
  width: 250px;
  border: 1px solid black;
  margin: 10px;
`;

export default connect(mapStateToProps, null)(Beer);
