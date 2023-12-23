import React, { useState } from 'react';
import './TrafficLight.css';

const TrafficLight = () => {
  const [color, setColor] = useState('red');

  const nextState = () => {
    setColor((currentColor) => {
      switch (currentColor) {
        case 'red':
          return 'green';
        case 'green':
          return 'yellow';
        case 'yellow':
          return 'red';
        default:
          return currentColor;
      }
    });
  };

  return (
    <div>
      <div className={color === 'red' ? 'light red' : 'light'}></div>
      <div className={color === 'yellow' ? 'light yellow' : 'light'}></div>
      <div className={color === 'green' ? 'light green' : 'light'}></div>
      <button onClick={nextState}>Next State</button>
    </div>
  );
};

export default TrafficLight;
