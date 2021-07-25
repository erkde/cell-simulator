import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from './Button';
import { GameContext } from './GameContext';

const state = [[0, 0],[1, 1]];
const dispatch = jest.fn();

const wrapper: React.FC = ({ children }) => (
  <GameContext.Provider value={{ state, dispatch }}>{children}</GameContext.Provider>
);

test('renders the button text', () => {
  render(<Button action={{ type: 'reset'}}>Reset</Button>, { wrapper } );
  expect(screen.getByRole('button')).toHaveTextContent('Reset');
});

test('dispatches the action when clicked', () => {
  render(<Button action={{ type: 'reset'}}>Reset</Button>, { wrapper } );

  fireEvent.click(screen.getByRole('button'));
  expect(dispatch).toHaveBeenCalledWith({ type: 'reset' });
});
