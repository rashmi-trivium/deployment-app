import React, { useContext, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCounter = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <br /><div data-testid="counter">Counter: {count}</div><br />
      <button data-testid="increment" onClick={incrementCounter}>Increment</button>
      <button data-testid="decrement" onClick={decrementCounter}>Decrement</button>
    </>
  )
}

export default Counter