import { render, screen } from '@testing-library/react';

import { taskGenerator } from '@/test/data-generator';

import { TaskItem } from '../TaskItem';

describe('Tests for TestItem component', () => {
  test('should render tasks', () => {
    const demoTask = taskGenerator();
    const mockCallback = jest.fn();

    render(<TaskItem task={demoTask} updateTasks={mockCallback} />);
    const task = screen.getByDisplayValue(demoTask.name);

    expect(task).toBeInTheDocument();
  });
});
