import React, { useState } from "react";

const WithCounter = (WrappedComponent) => {
  const WithStateComponent = () => {
    const [state, dispatch] = useState(0);
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

  return WithStateComponent;
};

export default WithCounter;
