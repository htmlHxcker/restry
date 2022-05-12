import { Task } from '@/features/TaskList';

export const setArrayItem = (key: string, value: Array<Task>) => {
  const stringifiedValue = JSON.stringify(value);
  localStorage.setItem(key, stringifiedValue);
  return;
};
