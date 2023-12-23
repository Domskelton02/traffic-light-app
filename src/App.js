import React from 'react';
import TrafficLight from './TrafficLight';
import ClassBasedTrafficLight from './ClassBasedTrafficLight';
import './TrafficLight.css';
import './ClassBasedTrafficLight.css';

function App() {
  return (
    <div className="App">
      <TrafficLight />
      <ClassBasedTrafficLight />
    </div>
  );
}

export default App;
