import React, { useState } from "react";

const WithCounter = (WrappedComponent) => {
  const [counter, setCounter] = useState(1);

  const decreaseCounter = () => {
    setCounter((prev) => (prev - 1 >= 1 ? prev - 1 : prev));
  };

  const increaseCounter = () => {
    setCounter((prev) => (prev + 1 <= 1000 ? prev + 1 : prev));
  };
  return (
    <WrappedComponent
      increaseCounter={increaseCounter}
      decreaseCounter={decreaseCounter}
      counter={counter}
    />
  );
};

export default WithCounter;
