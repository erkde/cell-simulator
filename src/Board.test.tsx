import { render, screen } from '@testing-library/react';

import { Board } from './Board';
import { GameContext } from './GameContext';

const state = [[0, 1], [1, 0]];
const dispatch = jest.fn();

const wrapper: React.FC = ({ children }) => (
  <GameContext.Provider value={{ state, dispatch }}>{children}</GameContext.Provider>
);

test('renders a cell for each state value', () => {
  render(<Board />, { wrapper });

  expect(screen.getAllByRole('checkbox')).toHaveLength(state.flat().length);
});
