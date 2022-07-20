import React, { Component } from 'react';
import Header1 from './components/Header';
import Missions1 from './components/Missions';
import SolarSystem1 from './components/SolarSystem';

class App extends Component {
  render() {
    return (
      <div>
        <Header1 />
        <SolarSystem1 />
        <Missions1 />
      </div>
    );
  }
}

export default App;
