import styled from 'styled-components';

import { Board } from './Board';
import { Button } from './Button';
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

const ButtonGroup = styled.div`
  margin: 8px 0;

  * + * {
    margin-top: 8px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Title>Cell Simulator</Title>
      <GameProvider rows={6} columns={6}>
        <Board />
        <ButtonGroup>
          <Button action={{ type: "next"}}>Next</Button>
          <Button action={{ type: 'reset'}}>Reset</Button>
        </ButtonGroup>
      </GameProvider>
    </Wrapper>
  );
}

export { App };
