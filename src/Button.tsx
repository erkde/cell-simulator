import React from 'react';
import styled from 'styled-components';

import { Action } from './reducer';
import { useGameContext } from './useGameContext';

const Wrapper = styled.button`
  cursor: pointer;
  display: block;
  padding: 12px 16px;
  width: 100%;
`;

type Props = {
  action: Action;
};

function Button({ action, children }: React.PropsWithChildren<Props>) {
  const { dispatch } = useGameContext();
  
  function handleClick(_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    dispatch({ ...action });
  }

  return (
    <Wrapper onClick={handleClick}>
      {children}
    </Wrapper>
  );
}

export { Button };
