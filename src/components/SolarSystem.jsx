import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Title1 from './Title';
import PlanetCard1 from './PlanetCard';
import planets from '../data/planets';

export class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title1 headline="Planetas" />
        { planets.map(({ name, image }) => (<PlanetCard1
          key={ name }
          planetName={ name }
          planetImage={ image }
        />))}
      </div>
    );
  }
}

// SolarSystem.propTypes = {
//   planets: PropTypes.array.isRequired,
// };

export default SolarSystem;
