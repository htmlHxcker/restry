import React, { useState } from 'react';
import ReactModal from 'react-modal';
import './index.scss';
import TaskItem from './TaskItem';

function Tasks() {
  const [tasks, setTasks] = useState(['Cook', 'Sleep', 'Laundry', 'Read', 'Netflix']);
  const [showModal, setShowModal] = useState(false);
  ReactModal.setAppElement('#root');

  return (
    <div className="tasks">
      <h2 className="text-white heading-3 page-title">Tasks</h2>
      <div>
        <ul>
          {tasks.map((task) => <TaskItem task={task} key={Math.random() * 1000} />)}
        </ul>
      </div>

      <ReactModal
        isOpen={showModal}
        contentLabel="Modal with form for adding new tasks"
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
        onRequestClose={() => setShowModal(false)}
      >
        Testing the modal
        <button type="button" onClick={() => (setTasks([...tasks]))}>Test too</button>
      </ReactModal>
      <button type="button" className="primary--btn tasks__button" onClick={() => setShowModal(true)}>New Task</button>
    </div>
  );
}

export default Tasks;
