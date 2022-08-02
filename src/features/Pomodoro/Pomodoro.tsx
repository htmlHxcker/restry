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
        <button className="button--primary" title="Cancel timer">
          <FontAwesomeIcon icon={solid('multiply')} />
        </button>

        <button className="button--primary" title="Restart timer">
          <FontAwesomeIcon icon={solid('refresh')} />
        </button>

        <button
          className="button--primary"
          title="Start timer"
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
