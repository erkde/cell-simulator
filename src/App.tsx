import styled from 'styled-components';

import { Board } from './Board';

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 440px;
  padding: 0 16px;
`;

const Title = styled.h1`
  font-sie: 2rem;
  line-height: 1.1;
`;

function App() {
  return (
    <Wrapper>
      <Title>Cell Simulator</Title>
      <Board rows={6} columns={6} />
    </Wrapper>
  );
}

export { App };
