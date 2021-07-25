import React from 'react';
import styled from 'styled-components';

import { Cell } from './Cell';
import { useGameContext } from './useGameContext';

const Wrapper = styled.div`
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(var(--column-count), 1fr);
`;

interface Style extends React.CSSProperties {
  '--column-count': number;
};

function Board() {
  const { state } = useGameContext();  
  const rows = state.length;
  const columns = rows ? state[0].length : 0;

  return (
    <Wrapper
      style={{
        '--column-count': columns
      } as Style}
    >
      {state.map((row, rowIndex) => row.map((_, columnIndex) => (
        <Cell
          key={`row:${rowIndex}:column:${columnIndex}`}
          row={rowIndex}
          column={columnIndex}
        />
      )))}
    </Wrapper>
  );
}

export { Board };
