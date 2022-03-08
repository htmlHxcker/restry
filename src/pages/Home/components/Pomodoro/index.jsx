import React from 'react';
import './index.scss';
import Timer from './Timer';

function Pomodoro() {
  return (
    <div className="pomodoro">
      <Timer />
      <div><button type="submit" className="btn">Start Pomodoro</button></div>
    </div>
  );
}

export default Pomodoro;
