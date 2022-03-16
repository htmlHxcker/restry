import React, { useState, useEffect } from 'react';
import countDown from './countDown';
import './timer.scss';

function Timer() {
  const [timeLeft, setTimeLeft] = useState('00:00');
  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(countDown(183));
    }, 1000);
    return () => clearInterval(timerId);
  }, []);
  return (
    <div className="timer">
      <svg className="timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g className="timer__circle">
          <circle className="timer__path-elapsed" cx="50" cy="50" r="45" />
        </g>
      </svg>
      <span className="timer__label">{timeLeft}</span>
    </div>
  );
}

export default Timer;
