import React from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import TimeHelper from "../helpers/timeHelper";

var FA = require("react-fontawesome");

const TravelSegment = ({ duration }) => {
  return (
    <Row>
      <Col xs="3" />
      <Col xs="9">
        <div className="text-center">
          <FA name="long-arrow-down fa" />
          <FA
            name="car fa"
            style={{ marginRight: "15px", marginLeft: "15px" }}
          />
          {TimeHelper.millisecondsToSeconds(duration)}{" "}min{" "}
        </div>

      </Col>
    </Row>
  );
};

TravelSegment.propTypes = {
  duration: PropTypes.number.isRequired
};

export default TravelSegment;
