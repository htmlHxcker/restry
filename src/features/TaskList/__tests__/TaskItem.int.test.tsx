import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { taskGenerator } from '@/test/data-generator';

import { TaskItem } from '../TaskItem';

describe('Tests for TestItem component', () => {
  const demoTask = taskGenerator();
  const mockCallback = jest.fn();

  test('should render task', () => {
    render(<TaskItem task={demoTask} updateTasks={mockCallback} />);
    const task = screen.getByDisplayValue(demoTask.name);
    expect(task).toBeInTheDocument();
  });

  test('should be able to mark as done', async () => {
    render(<TaskItem task={demoTask} updateTasks={mockCallback} />);
    const user = userEvent.setup();
    await user.click(screen.getByLabelText('Mark as done'));
    expect(demoTask.done).toBe(!demoTask.done);
  });
});
