import React from 'react';
import { Progress } from 'reactstrap';

const ProgressBar = props => {
  const { startTime, endTime, duration } = props;
  let totalTime = endTime - startTime;
  let timeUsed = duration / totalTime * 100;
  let timeLeft = 100 - timeUsed;

  if (timeUsed === 0) {
    return (
      <div>
        <div style={{ marginTop: '5px', marginBottom: '15px' }}>
          <div style={{ marginTop: '5px' }}>
            <Progress multi>
              <Progress bar color="info" value={timeLeft}>
                <span style={{ float: 'left', marginLeft: '5px' }}>10AM</span>
                <span style={{ float: 'right', marginRight: '5px' }}>4PM</span>
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
              <span style={{ float: 'left', marginLeft: '5px' }}>10AM</span>
            </Progress>
            <Progress bar color="info" value={timeLeft}>
              <span style={{ float: 'right', marginRight: '5px' }}>4PM</span>
            </Progress>
          </Progress>
        </div>
      </div>
    );
  }
};

export default ProgressBar;
