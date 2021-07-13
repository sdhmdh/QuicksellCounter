import React, { useState } from 'react';
import Input from '../input/Input';


const Counter = () => {
    const [inputVal, setInputVal] = useState(1);

    const onInputChange = (e) => {
        setInputVal(e.target.value);
        console.log(e.target.value);
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

export { Counter };
