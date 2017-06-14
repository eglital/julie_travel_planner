import React from 'react';
import { Progress } from 'reactstrap';
const dateFormat = require('dateformat');

const ProgressBar = props => {
  const { startTime, endTime, duration } = props;
  let totalTime = endTime - startTime;
  let timeUsed = duration / totalTime * 100;
  let timeLeft = 100 - timeUsed;
  let readableStartTime = dateFormat(new Date(startTime), 'HH TT');
  let readableEndTime = dateFormat(new Date(endTime), 'HH TT');
  // let readableStartTime = 'string';
  // let readableEndTime = 'string';

  //Wed Jun 14 2017 11:00:00 GMT-0700 (PDT)

  if (timeUsed === 0) {
    return (
      <div>
        <div style={{ marginTop: '5px', marginBottom: '15px' }}>
          <div style={{ marginTop: '5px' }}>
            <Progress multi>
              <Progress bar color="info" value={timeLeft}>
                <span style={{ float: 'left', marginLeft: '5px' }}>
                  {readableStartTime}
                </span>
                <span style={{ float: 'right', marginRight: '5px' }}>
                  {readableEndTime}
                </span>
              </Progress>
            </Progress>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ marginTop: '5px', marginBottom: '15px' }}>
        <div style={{ marginTop: '5px' }}>
          <Progress multi>
            <Progress bar color="success" value={timeUsed}>
              <span style={{ float: 'left', marginLeft: '5px' }}>
                {readableStartTime}
              </span>
            </Progress>
            <Progress bar color="info" value={timeLeft}>
              <span style={{ float: 'right', marginRight: '5px' }}>
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
