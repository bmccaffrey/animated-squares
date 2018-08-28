import React, { Component } from 'react';
import './App.css';
import { Square } from './Components';
import { Container } from './Components';

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
