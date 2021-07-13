import React, { useState } from "react";

function WithCounter(WrappedComponent) {
  const [inputVal, setInputVal] = useState(1);

  const decreaseCounter = () => {
    setInputVal((prev) => (prev - 1 >= 1 ? prev - 1 : prev));
  };

  const increaseCounter = () => {
    setInputVal((prev) => (prev + 1 <= 1000 ? prev + 1 : prev));
  };
  return <WrappedComponent />;
}

export default withCounter;
