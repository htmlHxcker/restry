import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import PropTypes from 'prop-types';

import './TaskItem.scss';
import { Task } from './TaskList';

interface TaskItemProps {
  task: Task;
  updateTasks: (tasks: []) => void;
}

export function TaskItem({ task, updateTasks }: TaskItemProps) {
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

  const deleteTask = () => {
    const tasksAfterDeletion = tasks.filter((filteredTask: []) => filteredTask.id !== task.id);
    updateTasks(tasksAfterDeletion);
  };
  return (
    <li className="task__item text--dark-blue flex justify-between" data-testid="task-item">
      <label className="form-control task__item__text flex">
        <input type="checkbox" name="checkbox" onClick={() => {}} />
        <span className={`${task.done ? 'checked' : ''}`}>{task.name}</span>
      </label>

      <span>
        <button
          type="button"
          aria-label="Edit Task"
          title="Edit Task"
          className="task__item__button"
        >
          <PencilIcon />
        </button>
        <button
          type="button"
          aria-label="Delete Task"
          title="Delete Task"
          className="task__item__button"
          onClick={() => {
            deleteTask();
          }}
        >
          <TrashIcon />
        </button>
      </span>
    </li>
  );
}

TaskItem.propTypes = {
  task: PropTypes.array.isRequired,
  updateTasks: PropTypes.func.isRequired,
};
