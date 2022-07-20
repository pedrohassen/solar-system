import React, { Component } from 'react';
import Title1 from './Title';

export class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title1 headline="Missões" />
      </div>
    );
  }
}

export default Missions;
