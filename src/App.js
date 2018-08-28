import React, { Component } from 'react';
import './App.css';
import { Square, Container, Grid } from './Components';

class App extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </Grid>
      </Container>
    );
  }
}

export default App;
