import React, { Component } from 'react';
import Title1 from './Title';
import missions from '../data/missions';
import MissionCard1 from './MissionCard';

export class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title1 headline="Missões" />
        { missions.map(({ name, year, country, destination }) => (<MissionCard1
          key={ name }
          name={ name }
          year={ year }
          country={ country }
          destination={ destination }
        />))}
      </div>
    );
  }
}

export default Missions;
