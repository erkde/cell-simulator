import React from 'react';
import { render, screen } from '@testing-library/react';

import { GameContext } from './GameContext';
import { GameProvider } from './GameProvider';

test('renders children', () => {
  render(<GameProvider rows={1} columns={1}>waffles</GameProvider>);
  expect(screen.getByText('waffles')).toBeInTheDocument();
});

test('provides a GameContext', () => {
  render(
    <GameProvider rows={2} columns={4}>
      <GameContext.Consumer>
        {value => value && (
          <React.Fragment>
            <span>Rows: {value.state.length}</span>
            <span>Columns: {value.state[0].length}</span>
          </React.Fragment>
        )}
      </GameContext.Consumer>
    </GameProvider>
  );

  expect(screen.getByText('Rows: 2')).toBeInTheDocument();
  expect(screen.getByText('Columns: 4')).toBeInTheDocument();
});
