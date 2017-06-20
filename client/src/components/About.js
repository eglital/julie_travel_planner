import React from 'react';
//import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const About = props => {
  return (
    <Container>
      <Row>
        <Col xs="12" md={{ size: 8, offset: '2' }}>
          <div style={{ marginTop: '15px' }}>
            <h3
              style={{
                color: '#C17DBF',
                marginBottom: '15px',
                textDecoration: 'underline darkgrey'
              }}
            >
              About the App
            </h3>
          </div>
          <div>
            <p>
              <span style={{ color: '#C17DBF' }}>Julie</span>
              {' '}
              is an itinerary planner for people who have never heard of Google, Yelp, Foursquare, TravelPlanner, and probably like 40 others.
            </p>
            <p>
              Technology used: NodeJS, React, Redux, MongoDB, Mongoose, Bootstrap, Google API, Foursquare API
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12" md={{ size: 8, offset: '2' }}>
          <div>
            <h3
              style={{
                color: '#C17DBF',
                marginBottom: '15px',
                textDecoration: 'underline darkgrey'
              }}
            >
              Developed By
            </h3>
          </div>
          <div>
            <h5 style={{ marginBottom: '0px' }}>
              Egle Libby
            </h5>
            <span style={{ fontSize: '14px' }}>
              <a href="/"> LinkedIn </a> /
              <a href="/"> GitHub </a> /
              <a href="/"> Personal Site </a>
            </span>
            <p>
              Egle is the destroyer of worlds and collects keychains in her spare time.
            </p>
          </div>

          <div>
            <h5 style={{ marginBottom: '0px' }}>
              Nicholas Romeo
            </h5>
            <span style={{ fontSize: '14px' }}>
              <a href="/"> LinkedIn </a> /
              <a href="/"> GitHub </a> /
              <a href="/"> Personal Site </a>
            </span>
            <p>
              Nicholas cannot get these kids to stay off of his lawn.
            </p>
          </div>

          <div>
            <h5 style={{ marginBottom: '0px' }}>
              Renzo Tomlinson
            </h5>
            <span style={{ fontSize: '14px' }}>
              <a href="/"> LinkedIn </a> /
              <a href="/"> GitHub </a> /
              <a href="/"> Personal Site </a>
            </span>
            <p style={{ marginTop: '5px' }}>
              Renzo will not. Don't ask him.
            </p>
          </div>

          <div>
            <h5 style={{ marginBottom: '0px' }}>
              William Whitworth
            </h5>
            <span style={{ fontSize: '14px' }}>
              <a href="/"> LinkedIn </a> /
              <a href="/"> GitHub </a> /
              <a href="/"> Personal Site </a>
            </span>
            <p>
              William is not the famous music producer will.i.am and frankly we all feel a little deceived.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
//252,83, 132
export default About;
