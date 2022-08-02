import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import countDown from './utils/countDown';
import formatTime from './utils/formatTime';
import './Timer.scss';

const FULL_DASH_ARRAY = 283;
const TIMER_DURATION_IN_SECONDS = 1500;
const CIRCLE_ANIMATION_DIAMETER = '0 283';

interface TimerProps {
  isPaused: boolean;
}

export function Timer({ isPaused }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState<number>(TIMER_DURATION_IN_SECONDS);
  const [strokeDashArray, setStrokeDashArray] = useState<string>(CIRCLE_ANIMATION_DIAMETER);

  useEffect(() => {
    // Thanks to https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/ for the circular progress timer
    function calculateStrokeDashArray(): string {
      return `${(calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0)} 283`;
    }

    function calculateTimeFraction(): number {
      const rawTimeFraction = timeLeft / 1500;
      return rawTimeFraction - (1 / 1500) * (1 - rawTimeFraction);
    }
    if (isPaused === true) {
      return;
    }
    const timerId = setInterval(() => {
      setTimeLeft(countDown(TIMER_DURATION_IN_SECONDS));
      setStrokeDashArray(calculateStrokeDashArray());
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft, isPaused]);

  return (
    <div className="timer">
      <svg className="timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g className="timer__circle">
          <circle className="timer__path--elapsed" cx="50" cy="50" r="45" />
          <path
            className="timer__path--remaining"
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
      <span className="timer__label items-center justify-center">{formatTime(timeLeft)}</span>
    </div>
  );
}

Timer.propTypes = {
  isPaused: PropTypes.bool.isRequired,
};
