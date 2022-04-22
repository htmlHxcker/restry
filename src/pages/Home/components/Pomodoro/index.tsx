import { PauseIcon, PlayIcon } from '@heroicons/react/outline';

import './index.scss';
import Timer from './Timer';

function Pomodoro() {
  return (
    <div className="pomodoro">
      <Timer />
      <div className="flex">
        <button
          type="button"
          className="button--primary"
          aria-label="Button to start Pomodoro timer"
        >
          <PlayIcon className="pomodoro__control-icons" />
        </button>
        <button
          type="submit"
          className="button--primary"
          aria-label="Button to pause Pomodoro timer"
        >
          <PauseIcon className="pomodoro__control-icons" />
        </button>
        <button
          type="submit"
          className="button--primary"
          aria-label="Button to start Pomodoro timer"
        >
          Start Pomodoro
        </button>
      </div>
    </div>
  );
}

export default Pomodoro;
