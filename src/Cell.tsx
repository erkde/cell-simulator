import styled from 'styled-components';

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
  onToggle: (row: number, column: number) => void;
  value: number;
};

function Cell({ row, column, onToggle, value }: Props) {
  const alive = !!value;

  function handleToggle(event: React.SyntheticEvent) {
    onToggle(row, column);
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