import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';

export class SolarSystem extends Component {
  render() {
    const { headlineText } = this.props;
    return (
      <div data-testid="solar-system">
        <Title headline={ headlineText } />
      </div>
    );
  }
}

Title.propTypes = {
  headlineText: PropTypes.string.isRequired,
};

export default SolarSystem;
