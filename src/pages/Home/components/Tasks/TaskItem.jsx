import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function TaskItem({ task }) {
  return (<li className="task-card text-white">{task}</li>);
}
TaskItem.propTypes = {
  task: PropTypes.string.isRequired,
};
export default TaskItem;
