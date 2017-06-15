import React from 'react';
import { Container } from 'reactstrap';

const Hero = props => {
  return (
    <div>
      <div>
        <Container fluid>
          <h1>
            Julie
          </h1>
          <p style={{ clear: 'both' }} className="lead">
            Let Julie build you a fun itinerary for the day, complete with directions. Get started below!
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
