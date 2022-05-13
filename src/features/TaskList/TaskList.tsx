import { ErrorMessage } from '@hookform/error-message';
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

import { setArrayItem } from '@/utils/localStorage';

import NoTasks from './assets/no-tasks.svg';
import { TaskItem } from './TaskItem';
import './TaskItem.scss';
import './TasksList.scss';

export interface Task {
  taskName: string;
  done: boolean;
  id: string;
}

export function TasksList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    const tasksFromStore = JSON.parse(localStorage.getItem('tasks') || '[]');
    if (tasksFromStore?.length >= 1) {
      setTasks(tasksFromStore);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Task>();

  const handleAddition: SubmitHandler<Task> = (data: Task) => {
    const updatedTasks = [...tasks, { ...data, id: uuidv4() }];
    setArrayItem('tasks', updatedTasks);
    setTasks(updatedTasks);
    toast(`New task succesfully created`, {
      icon: '👏',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
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
              <TaskItem taskName={task.taskName} key={task.id} />
            ))}
          </ul>
        ) : (
          <div className="tasks-list--empty">
            <img src={NoTasks} alt="No Tasks yet" className="tasks__illustration" />
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
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}
