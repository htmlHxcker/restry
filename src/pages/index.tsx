import { useState } from 'react';

import { Pomodoro } from '@/features/Pomodoro';
import { TasksList } from '@/features/TaskList';
import './index.scss';

function Home() {
  const [hidePomodoro, setHidePomodoro] = useState(true);
  return (
    <>
      <input
        type="checkbox"
        name="Mobile view toggle"
        className="view-toggle"
        aria-label="Toggle View"
        onClick={() => {
          setHidePomodoro(!hidePomodoro);
        }}
      />

      <div className={`flex items-center ${hidePomodoro ? 'hide-pomodoro' : 'show-pomodoro'}`}>
        <TasksList />
        <Pomodoro />
      </div>
    </>
  );
}

export default Home;
