import React from 'react';
import PropTypes from 'prop-types';
import './timer.scss';

function Timer({
  size, strokeWidth, percentage,
}) {
  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * (Math.PI * radius);
  const dash = (percentage * circumference) / 100;

  return (
    <svg width={size} height={size} viewBox={viewBox}>
      <circle
        className="circular-path"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className="progress"
        fill="none"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        strokeDasharray={[dash, circumference - dash]}
        strokeLinecap="round"
      />
      <text
        className="timer-text"
        x="50%"
        y="50%"
        dy="20px"
        textAnchor="middle"
      >
        {`${percentage}%`}
      </text>
    </svg>
  );
}

Timer.propTypes = {
  size: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default Timer;
