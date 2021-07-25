import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { GameContext } from './GameContext';
import { useGameContext } from './useGameContext';

const state = [[0, 0],[1, 1]];
const dispatch = jest.fn();

const wrapper: React.FC = ({ children }) => (
  <GameContext.Provider value={{ state, dispatch }}>{children}</GameContext.Provider>
);

test('raises an error outside of a GameContext', () => {
  const { result } = renderHook(() => useGameContext());
  
  expect(result.error).toEqual(Error('useGameContext must be used within a GameContext.Provider'));
});

test('returns state & dispatch within a GameContext', () => {
  const { result } = renderHook(() => useGameContext(), { wrapper });

  expect(result.current.state).toEqual(state);
  expect(result.current.dispatch).toEqual(dispatch);
});
