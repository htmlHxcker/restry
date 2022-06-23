import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { taskGenerator } from '@/test/data-generator';

import { TasksList } from '../TasksList';

describe('Tests for Task list', () => {
  test('should show illustration if there are no tasks', () => {
    render(<TasksList />);
    const illustration = screen.getByAltText('No tasks yet');
    expect(illustration).toBeInTheDocument();
  });

  test('should be able to create tasks', async () => {
    const user = userEvent.setup();
    const task = taskGenerator();
    render(<TasksList />);

    const taskForm = screen.getByPlaceholderText('What do you want to work on?');
    await user.click(taskForm);
    await user.type(taskForm, task.name);
    expect(taskForm).toHaveValue(task.name);
    await user.click(screen.getByLabelText('Create Task'));
    const createdTask = screen.getByDisplayValue(task.name);

    expect(createdTask).toBeInTheDocument();
  });
  test('should fetch tasks from localstorage', () => {
    const { container } = render(<TasksList />);
    const TaskItem = screen.getByLabelText('Form input to edit task containing task name');
    expect(container).toContainElement(TaskItem);
  });
});

afterAll(() => {
  localStorage.clear();
  jest.clearAllMocks();
});
