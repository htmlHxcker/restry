import React from 'react';
import PropTypes from 'prop-types';
import './TaskItem.scss';

function TaskItem({ task }) {
  return (<li className="task-item text-dark-blue">{task}</li>);
}
TaskItem.propTypes = {
  task: PropTypes.string.isRequired,
};
export default TaskItem;
