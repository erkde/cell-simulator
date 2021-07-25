import styled from 'styled-components';

import { useGameContext } from './useGameContext';

const Wrapper = styled.div`
  background: var(--color-background);
  border: 1px solid var(--color-dark-800);
  cursor: pointer;
  padding-bottom: 100%;

  @supports(aspect-ratio) {
    aspect-ratio: 1;
    padding-bottom: unset;
  }
`;

interface Style extends React.CSSProperties {
  '--color-background': string;
};

type Props = {
  row: number;
  column: number;
};

function Cell({ row, column }: Props) {
  const { state, dispatch } = useGameContext();
  const alive = !!state[row][column];

  function handleToggle(_event: React.SyntheticEvent) {
    dispatch({ type: 'toggle', payload: { row, column }});
  }

  return (
    <Wrapper
      aria-checked={alive}
      onClick={handleToggle}
      onKeyPress={handleToggle}
      role='checkbox'
      style={{
        '--color-background': alive ? 'var(--color-green-300)' : 'var(--color-light-100)'
      } as Style}
      tabIndex={0}
    />
  );
}

export { Cell };
