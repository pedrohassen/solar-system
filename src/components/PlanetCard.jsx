import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="planetary-container" data-testid="planet-card">
        <div className="planet-image">
          <img
            className={ `${planetName} planet-spin` }
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
          />
        </div>
        <div className="align-names">
          <p className="planet-names" data-testid="planet-name">{planetName}</p>
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
