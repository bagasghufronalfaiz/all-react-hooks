import React, { useState } from 'react';

const StateTutorial = () => {
  const [counter, setcounter] = useState(0);
  const increment = () => {
    setcounter(counter+1);
  }
  return (<div>
    <h1>{counter}</h1>
    <button onClick={increment}>Increment</button>
  </div>);
};

export default StateTutorial;
