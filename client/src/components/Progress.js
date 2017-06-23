import React from 'react';
import { Progress } from 'reactstrap';
const dateFormat = require('dateformat');

const ProgressBar = props => {
  const { startTime, endTime, duration } = props;
  let totalTime = endTime - startTime;
  let timeUsed = duration / totalTime * 100;
  let timeLeft = 100 - timeUsed;
  let readableStartTime = dateFormat(new Date(startTime), 'hh TT');
  if (readableStartTime.charAt(0) === '0') {
    readableStartTime = readableStartTime.substring(1);
  }
  let readableEndTime = dateFormat(new Date(endTime), 'hh TT');
  if (readableEndTime.charAt(0) === '0') {
    readableEndTime = readableEndTime.substring(1);
  }

  if (timeUsed === 0) {
    return (
      <div className="progress-container">
        <div className="progress-bar-wrapper">
          <Progress multi>
            <Progress bar value={timeLeft}>
              <span className="progress-start-time">
                {readableStartTime}
              </span>
              <span className="progress-end-time">
                {readableEndTime}
              </span>
            </Progress>
          </Progress>
        </div>
      </div>
    );
  } else {
    return (
      <div className="progress-container">
        <div className="progress-bar-wrapper">
          <Progress multi>
            <Progress bar color="success" value={timeUsed}>
              <span className="progress-start-time">
                {readableStartTime}
              </span>
            </Progress>
            <Progress bar color="info" value={timeLeft}>
              <span className="progress-end-time">
                {readableEndTime}
              </span>
            </Progress>
          </Progress>
        </div>
      </div>
    );
  }
};

export default ProgressBar;
