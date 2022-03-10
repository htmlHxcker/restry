import React from 'react';
import './index.scss';

function Tasks() {
  return (
    <div className="tasks">
      <h2 className="text-white heading-3 page-title">Tasks</h2>
      <div>
        <ul>
          <li className="task-card text-white">Complete Bojack Horseman</li>
          <li className="task-card text-white">Cook for Tosin</li>
          <li className="task-card text-white">Buy Food for Temi</li>
          <li className="task-card text-white">Task 4</li>
          <li className="task-card text-white">Task 4</li>
          <li className="task-card text-white">Task 4</li>
        </ul>
      </div>
      <button type="button" className="primary--btn">New Task</button>
    </div>
  );
}

export default Tasks;
