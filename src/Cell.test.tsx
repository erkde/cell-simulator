import { fireEvent, render, screen } from '@testing-library/react';

import { Cell } from './Cell';
import { GameContext } from './GameContext';

const state = [[0, 0],[1, 1]];
const dispatch = jest.fn();

const wrapper: React.FC = ({ children }) => (
  <GameContext.Provider value={{ state, dispatch }}>{children}</GameContext.Provider>
);

test('renders an checked element', () => {
  render(<Cell row={1} column={1}/>, { wrapper });

  expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'true');
});

test('renders an unchecked element', () => {
  render(<Cell row={0} column={1}/>, { wrapper });

  expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'false');
});

test('dispatches a toggle action on click', () => {
  render(<Cell row={1} column={1}/>, { wrapper });

  fireEvent.click(screen.getByRole('checkbox'));
  expect(dispatch).toHaveBeenCalledWith({ type: 'toggle', payload: { row: 1, column: 1 }});
});

test('dispatches a toggle action on key press', () => {
  render(<Cell row={1} column={1}/>, { wrapper });

  fireEvent.keyPress(screen.getByRole('checkbox'), { key: 'Enter', keyCode: 13 });
  expect(dispatch).toHaveBeenCalledWith({ type: 'toggle', payload: { row: 1, column: 1 }});
});
