import React, { useState, useEffect } from 'react';
import countDown, { formatTime } from './utils';
import './timer.scss';

const FULL_DASH_ARRAY = 283;

function Timer() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [strokeDashArray, setStrokeDashArray] = useState('0 283');

  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / 1500;
    return rawTimeFraction - (1 / 1500) * (1 - rawTimeFraction);
  }
  function calculateStrokeDashArray() {
    return `${
      (
        calculateTimeFraction() * FULL_DASH_ARRAY
      ).toFixed(0)
    } 283`;
  }
  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(countDown(1500));
      document.title = `⏲${formatTime(timeLeft)} | Restry`;
      setStrokeDashArray(calculateStrokeDashArray());
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);
  return (
    <div className="timer">
      <svg className="timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g className="timer__circle">
          <circle className="timer__path-elapsed" cx="50" cy="50" r="45" />
          <path
            className="timer__path-remaining"
            strokeDasharray={strokeDashArray}
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          />
        </g>
      </svg>
      <span className="timer__label">{formatTime(timeLeft)}</span>
    </div>
  );
}

export default Timer;
