import React, { Component } from 'react';
import Title1 from './Title';

export class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title1 headline="Planetas" />
      </div>
    );
  }
}

export default SolarSystem;
