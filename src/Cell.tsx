import styled from 'styled-components';

const Wrapper = styled.div`
  background: var(--color-light-100);
  border: 1px solid var(--color-dark-800);
  cursor: pointer;
  padding-bottom: 100%;

  @supports(aspect-ratio) {
    aspect-ratio: 1;
    padding-bottom: unset;
  }
`;

function Cell() {
  return (
    <Wrapper
      aria-checked={false}
      role="checkbox"
      tabIndex={0}
    />
  );
}

export { Cell };