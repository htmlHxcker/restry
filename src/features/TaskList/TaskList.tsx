import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import NoTasks from './assets/no-tasks.svg';
import { TaskItem } from './TaskItem';
import './TaskItem.scss';
import './TasksList.scss';

interface Task {
  taskName: string;
  done: boolean;
}

export function TasksList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Task>();

  const handleAddition: SubmitHandler<Task> = (data: Task) => {
    setTasks([...tasks, data]);
  };

  const formOptions = {
    taskName: { required: 'Task Name is required' },
  };

  return (
    <div className="tasks-list">
      <h2 className="text--white heading--3 page__title">Tasks</h2>
      <div>
        {tasks.length >= 1 ? (
          <ul>
            {tasks.map((task) => (
              <TaskItem taskName={task.taskName} key={Math.random() * 1000} />
            ))}
          </ul>
        ) : (
          <div className="tasks-list--empty">
            <img src={NoTasks} alt="" className="tasks__illustration" />
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit(handleAddition)}>
        <div className="new-task-form__container">
          <label htmlFor="taskName" className="new-task-form__label sr-only">
            What do you want to work on?
          </label>
          <input
            type="text"
            {...register('taskName', formOptions.taskName)}
            className="new-task-form__input"
            placeholder="What do you want to work on?"
          />
          <ErrorMessage
            errors={errors}
            name="taskName"
            as="p"
            className="new-task-form__error-message"
          />
          <button type="submit" className="button--primary new-task-form__submit">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}
