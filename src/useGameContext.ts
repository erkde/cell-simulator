import React from 'react';

import { GameContext } from './GameContext';

function useGameContext() {
  const context = React.useContext(GameContext);
  
  if (context === undefined) {
    throw new Error('useGameContext must be used within a GameContext.Provider');
  }

  return context;
}

export { useGameContext };
