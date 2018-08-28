import React, { Component } from 'react';
import './App.css';
import { Square } from './Components';
import { Container } from './Components';
import { Grid } from './Components';

class App extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Square />
        </Grid>
      </Container>
    );
  }
}

export default App;
