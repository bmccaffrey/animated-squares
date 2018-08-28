import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
// import './square.css';

export default class Square extends Component {
  render() {
    return (
      <div>
        <Stuff />
        {/* <div class="square" /> */}
      </div>
    );
  }
}

const Rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(135deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

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
