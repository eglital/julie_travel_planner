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
            Wondering what to do today? Julie's got ideas. Just give her a little information about where you are and how much time you have and she'll help you pick out the best local food and activities!
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
