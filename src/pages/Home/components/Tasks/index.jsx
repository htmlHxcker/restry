import React, { useState } from 'react';
import ReactModal from 'react-modal';
import TaskItem from './TaskItem';
import girlWithLaptop from '../../assets/girl-with-laptop.png';
import './index.scss';

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
        overlayClassName="modal__overlay"
        className="modal"
        onRequestClose={() => setShowModal(false)}
      >
        <div className="modal__title--container">
          <h2 className="heading-4">New To-do Item</h2>
          <img src={girlWithLaptop} alt="Girl with Laptop and a Mug" />
        </div>

        <div className="modal__form--container">
          <form action="">
            <input type="text" name="task name" />
          </form>
          <button type="button" onClick={() => (setTasks([...tasks]))}>Test too</button>
        </div>

      </ReactModal>
      <button type="button" className="primary--btn tasks__button" onClick={() => setShowModal(true)}>New Task</button>
    </div>
  );
}

export default Tasks;
