import React, { Component } from 'react';
import Title1 from './Title';
import PlanetCard1 from './PlanetCard';
import planets from '../data/planets';

export class SolarSystem extends Component {
  render() {
    return (
      <div className="planets-container" data-testid="solar-system">
        <Title1 headline="Planetas" />
        <div className="align-planets">
          { planets.map(({ name, image }) => (<PlanetCard1
            key={ name }
            planetName={ name }
            planetImage={ image }
          />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
