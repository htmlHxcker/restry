import React, { useState } from 'react';
import './index.scss';
import TaskItem from './TaskItem';

function Tasks() {
  const [tasks, setTasks] = useState(['Cook', 'Sleep', 'Laundry', 'Read']);
  return (
    <div className="tasks">
      <h2 className="text-white heading-3 page-title">Tasks</h2>
      <div>
        <ul>
          {tasks.map((task) => <TaskItem task={task} />)}
        </ul>
      </div>
      <button type="button" className="primary--btn tasks__button" onClick={() => (setTasks([...tasks]))}>New Task</button>
    </div>
  );
}

export default Tasks;
