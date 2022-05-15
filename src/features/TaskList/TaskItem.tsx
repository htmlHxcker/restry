import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import PropTypes from 'prop-types';
import './TaskItem.scss';

interface TaskItemProps {
  taskName: string;
}

export function TaskItem({ taskName }: TaskItemProps) {
  return (
    <li className="task__item text--dark-blue flex justify-between" data-testid="task-item">
      <p className="task__item__text">{taskName}</p>
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
        >
          <TrashIcon />
        </button>
      </span>
    </li>
  );
}

TaskItem.propTypes = {
  taskName: PropTypes.string.isRequired,
};
