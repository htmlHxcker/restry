import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import './Pomodoro.scss';
import { Timer } from './Timer';

export function Pomodoro() {
  const [isPaused, setIsPaused] = useState(true);
  return (
    <div className="pomodoro">
      <Timer isPaused={isPaused} />
      <div className="flex">
        <button className="button--primary" aria-label="Button to increase timer duration">
          <FontAwesomeIcon icon={solid('plus')} />
        </button>

        <button className="button--primary" aria-label="Button to reduce timer duration">
          <FontAwesomeIcon icon={solid('minus')} />
        </button>

        <button
          className="button--primary"
          aria-label="Button to start Pomodoro timer"
          onClick={() => {
            setIsPaused(!isPaused);
          }}
        >
          {isPaused ? (
            <FontAwesomeIcon icon={solid('play')} />
          ) : (
            <FontAwesomeIcon icon={solid('pause')} />
          )}
        </button>
      </div>
    </div>
  );
}
