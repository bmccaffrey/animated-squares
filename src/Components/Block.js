import React, { Component } from 'react';
import { Grid } from './Grid';
import { Square } from './Square';

export default class Block extends Component {
  render() {
    return (
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
    );
  }
}
