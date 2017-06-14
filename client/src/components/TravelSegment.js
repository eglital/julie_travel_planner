import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import PropTypes from "prop-types";
var FA = require("react-fontawesome");

const TravelSegment = ({ duration }) => {
  return (
    <Container>
      <Row>
        <Col>
          <FA name="long-arrow-down fa-2x" stack="1x" />
        </Col>
        <Col>
          <FA name="car fa-2x" />
          {" "}
          {duration}{" "}min
        </Col>
      </Row>
    </Container>
  );
};

TravelSegment.propTypes = {};

export default TravelSegment;
