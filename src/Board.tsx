import React from 'react';
import styled from 'styled-components';

import { Cell } from './Cell';

const Wrapper = styled.div`
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(var(--column-count), 1fr);
`;

type Props = {
  rows: number;
  columns: number;
};

interface Style extends React.CSSProperties {
  '--column-count': number;
};

function Board({ rows, columns }: Props) {
  const initialState: number[][] = React.useMemo(() =>
    [ ...Array(rows) ].map(_ => Array(columns).fill(0)), 
    [rows, columns]
  );

  const [state, setState] = React.useState(initialState);

  function handleToggle(row: number, column: number) {
    setState(currentState => {
      const nextState = currentState.map(row => row.slice());
      nextState[row][column] = currentState[row][column] ? 0 : 1;

      return nextState;
    });
  }

  return (
    <Wrapper
      style={{
        '--column-count': columns
      } as Style}
    >
      {state.map((row, rowIndex) => row.map((cell, columnIndex) => (
        <Cell
          key={`row:${rowIndex}:column:${columnIndex}`}
          row={rowIndex}
          column={columnIndex}
          onToggle={handleToggle}
          value={cell}
        />
      )))}
    </Wrapper>
  );
}

export { Board };