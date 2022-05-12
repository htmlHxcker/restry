import { DotsHorizontalIcon } from '@heroicons/react/outline';
import PropTypes from 'prop-types';
import './TaskItem.scss';

interface TaskItemProps {
  taskName: string;
}

export function TaskItem({ taskName }: TaskItemProps) {
  return (
    <li className="task__item text--dark-blue flex justify-between" data-testid="task-item">
      {taskName}
      <span>
        <DotsHorizontalIcon className="task__item__menu" />
      </span>
    </li>
  );
}

TaskItem.propTypes = {
  taskName: PropTypes.string.isRequired,
};
