import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="mission-list" data-testid="mission-card">
        <div className="card-title">
          <p className="margin-name" data-testid="mission-name">{ name }</p>
        </div>
        <div className="card-body">
          <p data-testid="mission-year">{ year }</p>
          <p data-testid="mission-country">{ country }</p>
          <p data-testid="mission-destination">{ destination }</p>
        </div>
      </div>

    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
