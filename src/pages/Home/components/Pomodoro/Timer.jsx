import React, { useState } from 'react';
import './timer.scss';
import formatTime from './useCountDown';

function Timer() {
  const [time, setTime] = useState(0);

  const timeToCountFrom = 183;
  let timeLeft = 0;
  let timePassed = 0;
  setInterval(() => {
    timePassed += 1;
    timeLeft = timeToCountFrom - timePassed;
    setTime(formatTime(timeLeft));
  }, 1000);
  return (

    <div className="timer">
      <svg className="timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g className="timer__circle">
          <circle className="timer__path-elapsed" cx="50" cy="50" r="45" />
        </g>
      </svg>
      <span className="timer__label">{time}</span>
    </div>
  );
}

export default Timer;
