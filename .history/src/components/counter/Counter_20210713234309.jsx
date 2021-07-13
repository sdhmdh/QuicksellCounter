import React, { useState } from 'react';
import { Input, CounterToggler } from '../../components';
import withCounter from '../../hoc/withCounter';
import './Counter.css';


const Counter = (props) => {
    const onInputChange = (e) => {
        const input = Number(e.target.value);
        if (input >= 1 && input <= 1000) {
            setInputVal(input);
        }
    }

    return (
        <div className="counter">
            <CounterToggler name="substract" operator={"-"} onOperatorClick={decreaseCounter} />
            <Input class="counter-input" value={inputVal} onChange={onInputChange} />
            <CounterToggler name="add" operator={"+"} onOperatorClick={increaseCounter} />
        </div>
    )
}

const WithCounter = withCounter(Counter);
export { WithCounter as Counter }
