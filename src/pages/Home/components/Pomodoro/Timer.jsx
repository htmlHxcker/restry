import React from 'react';
import PropTypes from 'prop-types';
import './timer.scss';

function Timer({
  size, strokeWidth, percentage, color,
}) {
  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;
  return (
    <svg width={size} height={size} viewBox={viewBox}>
      <circle fill="none" stroke="#ccc" cx={size / 2} cy={size / 2} r={radius} strokeWidth={`${strokeWidth}px`} />
    </svg>
  );
}

Timer.propTypes = {
  size: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};
export default Timer;
