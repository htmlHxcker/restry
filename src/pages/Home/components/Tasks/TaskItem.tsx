import PropTypes from 'prop-types';
import { DotsHorizontalIcon } from '@heroicons/react/outline';
import './TaskItem.scss';

interface TaskItemProps {
  task: {
    taskName: string,
    taskLength: number,
    done: boolean
  }
}

function TaskItem({ task }: TaskItemProps) {
  return (
    <li className="task__item text--dark-blue flex justify-between">
      {task.taskName}
      <span>
        <DotsHorizontalIcon className="task__item__menu" />
      </span>
    </li>
  );
}

TaskItem.propTypes = {
  task: PropTypes.string.isRequired,
};
export default TaskItem;
