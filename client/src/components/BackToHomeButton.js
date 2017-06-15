import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import PropTypes from "prop-types";
var FA = require("react-fontawesome");

const BackToHomeButton = ({ onClick }) => {
  return (
    <Container>
      <Row>
        <Col
          className="text-center"
          xs={{ size: 6, push: 2, pull: 2, offset: 1 }}
        >
          <Button onClick={onClick}>
            I Want To Go Home Now.
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default BackToHomeButton;
