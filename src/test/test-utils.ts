import { taskGenerator } from './data-generator';

export const createTask = () => {
  const task = taskGenerator();
  return task;
};
