import React from 'react';
import { Container } from 'reactstrap';

const Hero = props => {
  return (
    <div
      className="hero text-center"
      style={{ marginTop: '10px', marginBottom: '0px' }}
    >
      <Container fluid className="text-center">
        <p style={{ marginBottom: '0px' }} className="lead">
          Let
          {' '}
          <span className="julie-purple bold">Julie</span>
          {' '}
          build your itinerary for the day, complete with directions. Get started below!
        </p>

        <p
          className="julie-purple"
          style={{ marginTop: '0px', marginBottom: '20px' }}
        >
          ______________________________
        </p>
        <div style={{ clear: 'both' }} />
      </Container>
    </div>
  );
};

export default Hero;
