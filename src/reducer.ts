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
  | { type: 'reset' }
  | { type: 'next' }

function initialize({ rows, columns }: Dimensions): State {
  return [ ...Array(rows) ].map(_ => Array(columns).fill(0));
}

function toroidalIndex(index: number, length: number): number {
  if (index === -1) {
    return length - 1;
  } else if (index === length) {
    return 0;
  } else {
    return index;
  }
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'toggle': {
      const { payload: { row, column }} = action;

      const nextState = state.map(row => row.slice());
      nextState[row][column] = state[row][column] ? 0 : 1;
      
      return nextState;
    }

    case 'next': {
      const nextState = state.map(row => row.slice());

      state.forEach((row, rowIndex, board) =>
        row.forEach((cell, cellIndex) => {
          const rows = board.length;
          const cols = board[rowIndex].length;

          const above = toroidalIndex(rowIndex - 1, rows);
          const below = toroidalIndex(rowIndex + 1, rows);
          const left  = toroidalIndex(cellIndex - 1, cols);
          const right = toroidalIndex(cellIndex + 1, cols);

          const neighbours = [
            board[above][left],
            board[above][cellIndex],
            board[above][right],
            board[rowIndex][left],
            board[rowIndex][right],
            board[below][left],
            board[below][cellIndex],
            board[below][right],
          ];

          const aliveCells = neighbours.reduce((total, neighbour) => total + neighbour, 0);

          if (cell) {
            if (aliveCells < 2 || aliveCells > 3) {
              nextState[rowIndex][cellIndex] = 0;
            }
          } else {
            if (aliveCells === 3) {
              nextState[rowIndex][cellIndex] = 1;
            }
          }
        })
      );

      return nextState;
    }

    case 'reset': {
      const rows = state.length;
      const columns = rows ? state[0].length : 0;

      return initialize({ rows, columns });
    }

    default: {
      throw new Error('Unhandled action');
    }
  }
}

export type { Action, State };
export { initialize, reducer, toroidalIndex };
