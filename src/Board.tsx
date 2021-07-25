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
  const state: number[][] = React.useMemo(() => 
    [ ...Array(rows) ].map(_ => Array(columns).fill(0)), 
    [rows, columns]
  );

  return (
    <Wrapper
      style={{
        '--column-count': columns
      } as Style}
    >
      {state.map((row, rowIndex) => row.map((_, columnIndex) => (
        <Cell
          key={`row:${rowIndex}:column:${columnIndex}`}
        />
      )))}
    </Wrapper>
  );
}

export { Board };