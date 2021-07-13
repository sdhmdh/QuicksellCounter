import React, { useState } from 'react';
import Input from '../input/Input';
import './Counter.css';


const Counter = () => {
    const [inputVal, setInputVal] = useState(1);

    const onInputChange = (e) => {
        if (1 <= Number(e.target.value) <= 1000) {
            setInputVal(Number(e.target.value));
            console.log(e.target.value);
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
            <div onClick={decreaseCounter}>-</div>
            <Input class="counter-input" value={inputVal} onChange={onInputChange} />
            <div onClick={increaseCounter}>+</div>
        </div>
    )
}

export default Counter;
