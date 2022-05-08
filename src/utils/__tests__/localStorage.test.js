import { createTask } from '@/test/test-utils';
import { setArrayItem } from '@/utils/localStorage';

test('should set item to local storage', () => {
  localStorage.clear();

  const task = createTask();
  setArrayItem('task', task);

  const savedTask = localStorage.getItem('task');
  expect(savedTask.length).toHaveLength(1);
});
