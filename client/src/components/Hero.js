import React from 'react';
import { Container } from 'reactstrap';

const Hero = props => {
  return (
    <div
      className="hero text-center"
      style={{ marginTop: '20px', marginBottom: '0px' }}
    >
      <Container fluid>
        <p style={{ marginBottom: '0px' }} className="lead text-center">
          Let Julie build your itinerary for the day, complete with directions. Get started below!
        </p>

        <p
          className="text-center"
          style={{ color: '#C17DBF', marginTop: '0px', marginBottom: '20px' }}
        >
          ______________________________
        </p>
        <div className="text-center" style={{ clear: 'both' }} />
      </Container>
    </div>
  );
};

export default Hero;
