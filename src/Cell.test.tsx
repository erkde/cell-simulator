import { fireEvent, render, screen } from '@testing-library/react';

import { Cell } from './Cell';

const onToggle = jest.fn();

test('renders a checked element', () => {
  render(<Cell value={1} row={0} column={0} onToggle={onToggle} />);
  expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'true');
});

test('renders an unchecked element', () => {
  render(<Cell value={0} row={0} column={0} onToggle={onToggle} />);
  expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'false');
});

test('invokes onToggle on click', () => {
  render(<Cell value={0} row={1} column={2} onToggle={onToggle} />)

  fireEvent.click(screen.getByRole('checkbox'));
  expect(onToggle).toHaveBeenCalledWith(1, 2);
});

test('invokes onToggle on key press', () => {
  render(<Cell value={0} row={3} column={4} onToggle={onToggle} />)

  fireEvent.keyPress(screen.getByRole('checkbox'), { key: 'Enter', keyCode: 13 });
  expect(onToggle).toHaveBeenCalledWith(3, 4);
});
