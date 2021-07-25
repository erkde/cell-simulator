import styled from 'styled-components';

import { Board } from './Board';
import { GameProvider } from './GameProvider';

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
      <GameProvider rows={6} columns={6}>
        <Board />
      </GameProvider>
    </Wrapper>
  );
}

export { App };
