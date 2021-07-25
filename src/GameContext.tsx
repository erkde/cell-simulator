import React from 'react';

import { Action, State } from './reducer';

type Dispatch = (action: Action) => void;

type Context = {
  state: State;
  dispatch: Dispatch;
};

const GameContext = React.createContext<Context | undefined>(undefined);

export { GameContext };
