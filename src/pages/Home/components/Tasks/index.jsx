import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import TaskItem from './TaskItem';
import girlWithLaptop from '../../assets/girl-with-laptop.png';
import './index.scss';

function Tasks() {
  const [tasks, setTasks] = useState(['Cook', 'Sleep', 'Laundry', 'Read', 'Netflix']);
  const [showModal, setShowModal] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleAddition = (data) => {
    setTasks([...tasks, data.taskName]);
  };
  const formOptions = {
    taskName: { required: 'Task Name is required' },
    taskLength: {
      required: 'You have to fill in how long you want to work',
      minLength: {
        value: 1,
        message: 'Time has to be greater than 1',
      },
    },
  };
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
          <form onSubmit={handleSubmit(handleAddition)}>
            <div>
              <label htmlFor="taskName" className="form__label">What do you want to work on?</label>
              <input type="text" name="taskName" {...register('taskName', formOptions.taskName)} className="form__input" />
              <ErrorMessage errors={errors} name="taskName" as="p" className="error-message" />
            </div>
            <div>
              <label htmlFor="taskLength" className="form__label">For how long?</label>
              <input type="number" name="taskLength" {...register('taskLength', formOptions.taskLength)} className="form__input" />
              <ErrorMessage errors={errors} name="taskLength" as="p" className="error-message" />
            </div>

            <button type="submit" className="primary--btn">Create Task</button>
          </form>
        </div>

      </ReactModal>
      <button type="button" className="primary--btn tasks__button" onClick={() => setShowModal(true)}>New Task</button>
    </div>
  );
}

export default Tasks;
