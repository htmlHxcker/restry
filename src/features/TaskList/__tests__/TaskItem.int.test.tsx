import { render, screen } from '@testing-library/react';

import { TaskItem } from '../TaskItem';

describe('Tests for TestItem component', () => {
  test('should render tasks', () => {
    render(<TaskItem taskName="Hello World!" />);
    const task = screen.getByText('Hello World!');

    expect(task).toBeInTheDocument();
  });
});
