import React, { useState } from 'react';
import Input from '../input/Input';
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
            <div onClick={decreaseCounter} style={{ width: '33%' }}>-</div>
            <Input class="counter-input" value={inputVal} onChange={onInputChange} />
            <div onClick={increaseCounter} style={{ width: '33%' }}>+</div>
        </div>
    )
}

export default Counter;
