import React from 'react';

import { GameContext } from './GameContext';
import { initialize, reducer } from './reducer';

type Props = {
  columns: number;
  rows: number;
};

function GameProvider({ children, columns, rows }: React.PropsWithChildren<Props>) {
  const [state, dispatch] = React.useReducer(reducer, { rows, columns }, initialize);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export { GameProvider };
