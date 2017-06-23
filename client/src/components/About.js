import React from "react";
//import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";

const About = props => {
  window.scrollTo(0, 0);
  return (
    <Container>
      <Row>
        <Col xs="12" md={{ size: 8, offset: "2" }}>
          <div style={{ marginTop: "15px" }}>
            <h3
              className="text-center"
              style={{
                color: "#C17DBF",
                marginBottom: "15px",
                textDecoration: "underline darkgrey"
              }}
            >
              About the App
            </h3>
          </div>
          <div>
            <p>
              <span style={{ color: "#C17DBF", fontWeight: "500" }}>Julie</span>
              {" "}
              is a simple AI web application that takes into account your location, preferences and transportation, and helps you plan your day by giving 3 options at a time. Julie will calculate travel time and estimate the amount of time you are likely to spend at various locations through an algorithm that derives a length of time based on the type of location the user has selected. If the User wants to grab meals during the day, Julie will take care of that too. Users are able to use the app without logging in but they are also able to login in with Facebook to save the itinerary for viewing in the future.
            </p>
            <p>
              Technology used: NodeJS, React, Redux, MongoDB, Mongoose,
              Bootstrap, Google API, Foursquare API
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12" md={{ size: 8, offset: "2" }}>
          <div>
            <h3
              className="text-center"
              style={{
                color: "#C17DBF",
                marginBottom: "15px",
                textDecoration: "underline darkgrey"
              }}
            >
              Developed By
            </h3>
          </div>
          <div>
            <h5 style={{ marginBottom: "0px" }}>
              Egle Libby
            </h5>
            <span style={{ fontSize: "14px" }}>
              <a href="http://www.linkedin.com/in/egle-libby/"> LinkedIn </a> /
              <a href="https://github.com/eglital"> GitHub </a> /
              <a href="http://www.eglelibby.com/"> Personal Site </a>
            </span>
          </div>

          <div>
            <h5 style={{ marginBottom: "0px" }}>
              Nicholas Romeo
            </h5>
            <span style={{ fontSize: "14px" }}>
              <a href="http://www.linkedin.com/in/romeonicholas/"> LinkedIn </a>
              {" "}
              /
              <a href="https://github.com/Throw22"> GitHub </a> /
              <a href="https://throw22.github.io/"> Personal Site </a>
            </span>
          </div>

          <div>
            <h5 style={{ marginBottom: "0px" }}>
              Renzo Tomlinson
            </h5>
            <span style={{ fontSize: "14px" }}>
              <a href="http://www.linkedin.com/in/renzo-tomlinson-rd-5313481b/">
                {" "}LinkedIn{" "}
              </a>
              {" "}
              /
              <a href="https://github.com/rttomlinson"> GitHub </a> /
              <a href="https://rttomlinson.heroku.com"> Personal Site </a>
            </span>

          </div>

          <div>
            <h5 style={{ marginBottom: "0px" }}>
              William Whitworth
            </h5>
            <span style={{ fontSize: "14px" }}>
              <a href="http://www.linkedin.com/in/william-whitworth-20007329/">
                {" "}LinkedIn{" "}
              </a>
              {" "}
              /
              <a href="https://github.com/William-Charles"> GitHub </a> /
              <a href="https://william-charles.github.io/williamwhitworth/">
                {" "}Personal Site{" "}
              </a>
            </span>

          </div>
        </Col>
      </Row>
    </Container>
  );
};
//252,83, 132
export default About;
