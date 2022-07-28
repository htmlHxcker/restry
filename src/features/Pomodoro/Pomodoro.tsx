import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import './Pomodoro.scss';
import { Timer } from './Timer';

export function Pomodoro() {
  const [isPaused, setIsPaused] = useState(false);
  return (
    <div className="pomodoro">
      <Timer />
      <div className="flex">
        <button
          type="button"
          className="button--primary"
          aria-label="Button to increase timer duration"
        >
          <FontAwesomeIcon icon={solid('plus')} />
        </button>

        <button
          type="button"
          className="button--primary"
          aria-label="Button to reduce timer duration"
        >
          <FontAwesomeIcon icon={solid('minus')} />
        </button>

        <button
          type="submit"
          className="button--primary"
          aria-label="Button to start Pomodoro timer"
          onClick={() => {
            setIsPaused(!isPaused);
          }}
        >
          <FontAwesomeIcon icon={solid('play')} />
        </button>
      </div>
    </div>
  );
}
