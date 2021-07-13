import { useState } from "react";

const WithCounter = (WrappedComponent) => {
  return (props) => {
    const WithState = () => {
      const [counter, setCounter] = useState(1);
      const decreaseCounter = () => {
        setCounter((prev) => (prev - 1 >= 1 ? prev - 1 : prev));
      };

      const increaseCounter = () => {
        setCounter((prev) => (prev + 1 <= 1000 ? prev + 1 : prev));
      };
      return (
        <WrappedComponent
          {...props}
          increaseCounter={increaseCounter}
          decreaseCounter={decreaseCounter}
          counter={counter}
          setCounter={setCounter}
        />
      );
    };
    return <WithState />;
  };
};

export default WithCounter;
