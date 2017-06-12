import React from 'react';
import { Progress } from 'reactstrap';

const ProgressBar = props => {
  return (
    <div style={{ marginTop: '5px', marginBottom: '15px' }}>
      <div style={{ marginTop: '5px' }}>
        <Progress multi>
          <Progress bar color="success" value="40">
            <span style={{ float: 'left', marginLeft: '5px' }}>10AM</span>
          </Progress>
          <Progress bar color="info" value="60">
            <span style={{ float: 'right', marginRight: '5px' }}>4PM</span>
          </Progress>
        </Progress>
      </div>
    </div>
  );
};

export default ProgressBar;
