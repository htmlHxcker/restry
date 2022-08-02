import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useState } from 'react';
import toast from 'react-hot-toast';

import { setArrayItem } from '@/utils/localStorage';

import './TaskItem.scss';
import { Task } from './TasksList';

interface TaskItemProps {
  task: Task;
  updateTasks: (tasks: []) => void;
}

export function TaskItem({ task, updateTasks }: TaskItemProps) {
  const [editValue, setEditValue] = useState(task.name);
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

  function deleteTask() {
    const taskToDelete = task.id;
    const filteredTasks = tasks.filter((task: Task) => task.id !== taskToDelete);
    setArrayItem('tasks', filteredTasks);
    updateTasks(filteredTasks);
    toast(`Task succesfully deleted`);
  }

  function modifyTask(payload: { [key: string]: boolean | string }): void {
    const taskToModify = task;
    const modifiedTasks = tasks.map((task: Task) =>
      task.id !== taskToModify.id ? task : { ...taskToModify, ...payload }
    );
    setArrayItem('tasks', modifiedTasks);
    updateTasks(modifiedTasks);
  }
  return (
    <li className="task__item text--dark-blue flex justify-between">
      <span className="form-control task__item__text flex">
        <input
          type="checkbox"
          aria-label="Mark as done"
          defaultChecked={task.done}
          onClick={() => {
            modifyTask({ done: !task.done });
          }}
        />
        <input
          type="text"
          title="Edit Task"
          aria-label="Form input to edit task containing task name"
          value={editValue}
          className={`bg--light-blue ${task.done ? 'done' : ''}`}
          onChange={(event) => {
            setEditValue(event?.target.value);
          }}
          onBlur={() => {
            modifyTask({ name: editValue });
          }}
        />
      </span>

      <span>
        <button
          type="button"
          aria-label="Delete Task"
          title="Delete Task"
          className="task__item__button"
          onClick={() => {
            deleteTask();
          }}
        >
          <FontAwesomeIcon icon={regular('trash-can')} />
        </button>
      </span>
    </li>
  );
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  updateTasks: PropTypes.func.isRequired,
};
