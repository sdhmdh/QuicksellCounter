import { useEffect, useRef } from 'react';
import './CounterToggler.css';

function CounterToggler(props) {
    const counterToggler = useRef(null);
    useEffect(() => {
        debugger
        counterToggler.current.addEventListener('keydown', () => {
            debugger
        });

    }, []);

    return (
        <div ref={counterToggler} className={"operator " + props.name} onClick={props.onOperatorClick}>{props.operator}</div>
    )
}

export { CounterToggler }