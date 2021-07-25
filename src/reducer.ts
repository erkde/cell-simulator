type Location = {
  row: number
  column: number
};

type Dimensions = {
  rows: number
  columns: number
};

type State = number[][];

type Action =
  | { type: 'toggle', payload: Location }

function initialize({ rows, columns }: Dimensions): State {
  return [ ...Array(rows) ].map(_ => Array(columns).fill(0));
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'toggle': {
      const { payload: { row, column }} = action;

      const nextState = state.map(row => row.slice());
      nextState[row][column] = state[row][column] ? 0 : 1;
      
      return nextState;
    }

    default: {
      throw new Error('Unhandled action');
    }
  }
}

export type { Action, State };
export { initialize, reducer };
