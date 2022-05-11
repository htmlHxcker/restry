import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { createTask } from '@/test/test-utils';

import { TasksList } from '../TaskList';

describe('Tests for Task list', () => {
  test('should show illustration if there are no tasks', () => {
    const { container } = render(<TasksList />);
    const illustration = screen.getByAltText('No Tasks yet');
    expect(container).toContainElement(illustration);
  });

  test('should be able to create tasks', async () => {
    const user = userEvent.setup();
    const task = createTask();
    render(<TasksList />);

    const taskForm = screen.getByPlaceholderText('What do you want to work on?');
    await user.click(taskForm);
    await user.type(taskForm, task.taskName);
    expect(taskForm).toHaveValue(task.taskName);

    await user.click(screen.getByRole('button', { name: /Create Task/i }));
    const createdTask = screen.getByText(task.taskName);
    expect(createdTask).toBeInTheDocument();
  });
});
