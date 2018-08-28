import styled, { keyframes } from 'styled-components';
import { Rotate } from './Rotate';

export const Square = styled.div`
  height: 50px;
  width: 50px;
  background: red;
  border-radius: 10px;
  :hover {
    background: blue;
    animation-duration: 1s;
    animation-name: ${Rotate};
  }
`;
