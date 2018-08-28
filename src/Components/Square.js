import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { Rotate } from './Rotate';

export default class Square extends Component {
  render() {
    return (
      <div>
        <Stuff />
      </div>
    );
  }
}

const Stuff = styled.div`
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
