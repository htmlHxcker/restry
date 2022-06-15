import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

import { setArrayItem } from '@/utils/localStorage';

import './TaskItem.scss';
import { Task } from './TaskList';

interface TaskItemProps {
  task: Task;
  updateTasks: (tasks: []) => void;
}

export function TaskItem({ task, updateTasks }: TaskItemProps) {
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

  function deleteTask() {
    const taskToDelete = task.id;
    const filteredTasks = tasks.filter((task: Task) => task.id !== taskToDelete);
    setArrayItem('tasks', filteredTasks);
    updateTasks(filteredTasks);
    toast(`Task succesfully deleted`);
  }
  function completeTask() {
    const taskToComplete = task;
    const completedTask = tasks.map((task: Task) =>
      task.id !== taskToComplete.id ? task : { ...taskToComplete, done: !task.done }
    );
    setArrayItem('tasks', completedTask);
    updateTasks(completedTask);
  }
  return (
    <li className="task__item text--dark-blue flex justify-between" data-testid="task-item">
      <label className="form-control task__item__text flex">
        <input
          type="checkbox"
          name="checkbox"
          checked={task.done}
          onClick={() => {
            completeTask();
          }}
        />
        <span>
          <input
            type="text"
            value={task.name}
            className={`bg--light-blue ${task.done ? 'done' : ''}`}
            onChange={() => {}}
          />
        </span>
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
  task: PropTypes.object.isRequired,
  updateTasks: PropTypes.func.isRequired,
};
