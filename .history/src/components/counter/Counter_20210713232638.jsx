import React, { useState } from 'react';
import { Input, CounterToggler } from '../../components';
import './Counter.css';


const Counter = () => {
    const [inputVal, setInputVal] = useState(1);

    const onInputChange = (e) => {
        const input = Number(e.target.value);
        if (input >= 1 && input <= 1000) {
            setInputVal(input);
        }
    }

    const decreaseCounter = () => {
        setInputVal(prev => prev - 1 >= 1 ? prev - 1 : prev)
    }

    const increaseCounter = () => {
        setInputVal(prev => prev + 1 <= 1000 ? prev + 1 : prev)
    }

    return (
        <div className="counter">
            <CounterToggler name="substract" operator={"-"} onOperatorClick={decreaseCounter} />
            <Input class="counter-input" value={inputVal} onChange={onInputChange} />
            <CounterToggler name="add" operator={"+"} onOperatorClick={increaseCounter} />
        </div>
    )
}

export { Counter };
