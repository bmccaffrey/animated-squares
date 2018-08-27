import React, { Component } from 'react';
import './App.css';
import Square from './Square';
import { Container } from './Container';

class App extends Component {
  render() {
    return (
      <Container>
        <Square />
      </Container>
    );
  }
}

export default App;
