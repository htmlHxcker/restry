import { createTask } from '../../test/test-utils';
import { setArrayItem } from '../localStorage';

beforeEach(() => {
  localStorage.clear();
  jest.clearAllMocks();
});

describe('LocalStorage tests', () => {
  test('should set item to local storage', () => {
    localStorage.clear();

    const task = createTask();
    // The generated task has to be stringified because setArrayItem converts
    // the value argument to a JSON string before passing it to local storage
    const stringifiedTask = JSON.stringify(task);
    setArrayItem('task', task);

    expect(localStorage.setItem).toHaveBeenLastCalledWith('task', stringifiedTask);
    expect(localStorage.__STORE__['task']).toBe(stringifiedTask);
    expect(Object.keys(localStorage.__STORE__)).toHaveLength(1);
  });
});
