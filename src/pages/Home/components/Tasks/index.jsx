import React from 'react';
import './index.scss';

function Tasks() {
  return (
    <>
      <h2 className="text-white heading-3 screen-heading">Tasks</h2>
      <div>
        <ul>
          <li className="task-card text-white">Task 1</li>
          <li className="task-card text-white">Cook for Tosin</li>
          <li className="task-card text-white">Task 3</li>
          <li className="task-card text-white">Task 4</li>
        </ul>
      </div>
      <button type="button" className="btn new-task-btn">New Task</button>
    </>
  );
}

export default Tasks;
