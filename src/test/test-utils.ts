import { setArrayItem } from '@/utils/localStorage';

import { taskGenerator } from './data-generator';

export const createTask = async () => {
  const task = taskGenerator();
  setArrayItem('test:task', task);
  return task;
};
