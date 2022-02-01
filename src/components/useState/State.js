import React, { useState } from 'react';

const State = () => {
  const [counter, setcounter] = useState(0);
  const increment = () => {
    setcounter(counter+1);
  }
  return (<div>
    <h1>useState</h1>
    <h1>{counter}</h1>
    <button onClick={increment}>Increment</button>
  </div>);
};

export default State;
