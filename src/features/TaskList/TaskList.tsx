import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import NoTasks from './assets/no-tasks.png';
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
    <div className="tasks">
      <h2 className="text--white heading--3 page__title">Tasks</h2>
      <div>
        {tasks.length > 1 ? (
          <ul>
            {tasks.map((task) => (
              <TaskItem taskName={task.taskName} key={Math.random() * 1000} />
            ))}
          </ul>
        ) : (
          <div>
            <h3>You don&apos;t have any tasks...yet</h3>
            <img src={NoTasks} alt="clipboard featuring tasks" />
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit(handleAddition)}>
        <div>
          <label htmlFor="taskName" className="form__label">
            What do you want to work on?
          </label>
          <input
            type="text"
            {...register('taskName', formOptions.taskName)}
            className="form__input"
          />
          <ErrorMessage errors={errors} name="taskName" as="p" className="form__error-message" />
        </div>

        <button type="submit" className="button--primary">
          Create Task
        </button>
      </form>
    </div>
  );
}
