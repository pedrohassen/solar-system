import React, { Component } from 'react';
import Title1 from './Title';
import missions from '../data/missions';
import MissionCard1 from './MissionCard';

export class Missions extends Component {
  render() {
    return (
      <div className="missions-container" data-testid="missions">
        <Title1 headline="Missões" />
        <div className="full-card">
          { missions.map(({ name, year, country, destination }) => (
            <div className="card-text" key={ name }>
              <MissionCard1
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
