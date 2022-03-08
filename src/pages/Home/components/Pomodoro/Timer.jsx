import React from 'react';
import './timer.scss';

function Timer() {
  return (
    <div className="outer-rim">
      <div className="inner-rim" />
      <div className="timer">25:00</div>
      <div className="border">
        <div className="fill left">
          <div className="progress" />
        </div>
        <div className="fill right">
          <div className="progress" />
        </div>
      </div>
    </div>
  );
}

export default Timer;
