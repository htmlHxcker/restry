import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import { Pomodoro } from '@/features/Pomodoro';
import { TasksList } from '@/features/TaskList';
import './index.scss';

function Home() {
  const [hidePomodoro, setHidePomodoro] = useState(true);
  return (
    <>
      <button
        className="view-toggle button--primary"
        onClick={() => {
          setHidePomodoro(!hidePomodoro);
        }}
      >
        {hidePomodoro ? (
          <>
            <FontAwesomeIcon icon={solid('clock')} />
            <span> Show Timer</span>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={solid('list-alt')} />
            <span> Show Tasks</span>
          </>
        )}
      </button>
      <div className={`flex items-center ${hidePomodoro ? 'hide-pomodoro' : 'show-pomodoro'}`}>
        <TasksList />
        <Pomodoro />
      </div>
    </>
  );
}

export default Home;
