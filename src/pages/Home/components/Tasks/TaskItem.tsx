import PropTypes from 'prop-types';
import './TaskItem.scss';

interface TaskItemProps {
  task: string
}

function TaskItem({ task }: TaskItemProps) {
  return (<li className="task__item text--dark-blue">{task}</li>);
}
TaskItem.propTypes = {
  task: PropTypes.string.isRequired,
};
export default TaskItem;
